import { defaultTokenizerConfig } from "../tokenizer/index.js";
import { find as radixFind } from "../radix-tree/radix.js";
import { formatNanoseconds, getNanosecondsTime, sortTokenScorePredicate } from "../utils.js";
import { getIndices } from "./common.js";
import { prioritizeTokenScores, BM25 } from "../algorithms.js";
import { getFacets } from "../facets.js";
/**
 * Searches for documents in a database.
 * @param lyra The database to search.
 * @param params The search query.
 * @param language Optional parameter to override the default language analyzer.
 * @example
 * // Search for documents that contain 'Michael' in the 'author' field.
 * const result = await search(db, {
 *   term: 'Michael',
 *   properties: ['author']
 * });
 */ export async function search(lyra, params, language) {
    var _lyra_components, _lyra_components_elapsed;
    if (!language) {
        language = lyra.defaultLanguage;
    }
    if (!((_lyra_components = lyra.components) === null || _lyra_components === void 0 ? void 0 : _lyra_components.tokenizer)) {
        lyra.components = {
            ...lyra.components ?? {},
            tokenizer: defaultTokenizerConfig(language)
        };
    }
    params.relevance = getBM25Parameters(params.relevance);
    const shouldCalculateFacets = params.facets && Object.keys(params.facets).length > 0;
    const { limit =10 , offset =0 , exact =false , term , properties  } = params;
    const tokens = lyra.components.tokenizer.tokenizerFn(term, language, false, lyra.components.tokenizer);
    const indices = getIndices(lyra, properties);
    const results = Array.from({
        length: limit
    });
    const N = lyra.docsCount;
    const timeStart = getNanosecondsTime();
    // uniqueDocsIDs contains unique document IDs for all the tokens in all the indices.
    const uniqueDocsIDs = {};
    // indexMap is an object containing all the indexes considered for the current search,
    // and an array of doc IDs for each token in all the indices.
    //
    // Given the search term "quick brown fox" on the "description" index,
    // indexMap will look like this:
    //
    // {
    //   description: {
    //     quick: [doc1, doc2, doc3],
    //     brown: [doc2, doc4],
    //     fox:   [doc2]
    //   }
    // }
    const indexMap = {};
    // After we create the indexMap, we need to calculate the intersection
    // between all the postings lists for each token.
    // Given the example above, docsIntersection will look like this:
    //
    // {
    //   description: [doc2]
    // }
    //
    // as doc2 is the only document present in all the postings lists for the "description" index.
    const docsIntersection = {};
    for (const index of indices){
        const tokensMap = {};
        for (const token of tokens){
            tokensMap[token] = [];
        }
        indexMap[index] = tokensMap;
        docsIntersection[index] = [];
    }
    // Now it's time to loop over all the indices and get the documents IDs for every single term
    const indexesLength = indices.length;
    for(let i = 0; i < indexesLength; i++){
        var _params_boost;
        const index = indices[i];
        const avgFieldLength = lyra.avgFieldLength[index];
        const fieldLengths = lyra.fieldLengths[index];
        if (!(index in lyra.tokenOccurrencies)) continue;
        const lyraOccurrencies = lyra.tokenOccurrencies[index];
        const lyraFrequencies = lyra.frequencies[index];
        const tokensLength = tokens.length;
        for(let j = 0; j < tokensLength; j++){
            const term = tokens[j];
            // Here we get a TypeScript error: Type instantiation is excessively deep and possibly infinite.
            // Type definition is correct, but TypeScript is not able to infer the type recursively.
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const documentIDs = getDocumentIDsFromSearch(lyra, {
                ...params,
                index,
                term,
                exact
            });
            // lyraOccurrencies[term] can be undefined, 0, string, or { [k: string]: number }
            const termOccurrencies = typeof lyraOccurrencies[term] === "number" ? lyraOccurrencies[term] ?? 0 : 0;
            const scoreList = [];
            // Calculate TF-IDF value for each term, in each document, for each index.
            // Then insert sorted results into orderedTFIDFList.
            const documentIDsLength = documentIDs.length;
            for(let k = 0; k < documentIDsLength; k++){
                var _lyraFrequencies_id;
                const id = documentIDs[k];
                const tf = (lyraFrequencies === null || lyraFrequencies === void 0 ? void 0 : (_lyraFrequencies_id = lyraFrequencies[id]) === null || _lyraFrequencies_id === void 0 ? void 0 : _lyraFrequencies_id[term]) ?? 0;
                const bm25 = BM25(tf, termOccurrencies, N, fieldLengths[id], avgFieldLength, params.relevance);
                scoreList.push([
                    id,
                    bm25
                ]);
            }
            indexMap[index][term].push(...scoreList);
        }
        const docIds = indexMap[index];
        const vals = Object.values(docIds);
        docsIntersection[index] = prioritizeTokenScores(vals, (params === null || params === void 0 ? void 0 : (_params_boost = params.boost) === null || _params_boost === void 0 ? void 0 : _params_boost[index]) ?? 1);
        const uniqueDocs = docsIntersection[index];
        const uniqueDocsLength = uniqueDocs.length;
        for(let i = 0; i < uniqueDocsLength; i++){
            const [id, tfIdfScore] = uniqueDocs[i];
            const prevScore = uniqueDocsIDs[id];
            if (prevScore) {
                uniqueDocsIDs[id] = prevScore + tfIdfScore + 0.5;
            } else {
                uniqueDocsIDs[id] = tfIdfScore;
            }
        }
    }
    // Get unique doc IDs from uniqueDocsIDs map, sorted by value.
    const uniqueDocsArray = Object.entries(uniqueDocsIDs).sort(sortTokenScorePredicate);
    const resultIDs = new Set();
    // Populate facets if needed
    const facets = shouldCalculateFacets ? getFacets(lyra.schema, lyra.docs, uniqueDocsArray, params.facets) : {};
    // We already have the list of ALL the document IDs containing the search terms.
    // We loop over them starting from a positional value "offset" and ending at "offset + limit"
    // to provide pagination capabilities to the search.
    for(let i = offset; i < limit + offset; i++){
        const idAndScore = uniqueDocsArray[i];
        // If there are no more results, just break the loop
        if (typeof idAndScore === "undefined") {
            break;
        }
        const [id, score] = idAndScore;
        if (!resultIDs.has(id)) {
            // We retrieve the full document only AFTER making sure that we really want it.
            // We never retrieve the full document preventively.
            const fullDoc = lyra.docs[id];
            results[i] = {
                id,
                score,
                document: fullDoc
            };
            resultIDs.add(id);
        }
    }
    let elapsed = getNanosecondsTime() - timeStart;
    if (((_lyra_components_elapsed = lyra.components.elapsed) === null || _lyra_components_elapsed === void 0 ? void 0 : _lyra_components_elapsed.format) === "human") {
        elapsed = formatNanoseconds(elapsed);
    }
    const searchResult = {
        elapsed,
        hits: results.filter(Boolean),
        count: Object.keys(uniqueDocsIDs).length
    };
    if (shouldCalculateFacets) {
        searchResult.facets = facets;
    }
    return searchResult;
}
function getDocumentIDsFromSearch(lyra, params) {
    const idx = lyra.index[params.index];
    const searchResult = radixFind(idx, {
        term: params.term,
        exact: params.exact,
        tolerance: params.tolerance
    });
    const ids = new Set();
    for(const key in searchResult){
        for (const id of searchResult[key]){
            ids.add(id);
        }
    }
    return Array.from(ids);
}
const defaultBM25Params = {
    k: 1.2,
    b: 0.75,
    d: 0.5
};
function getBM25Parameters(params = defaultBM25Params) {
    return Object.assign({}, defaultBM25Params, params);
}

//# sourceMappingURL=search.js.map