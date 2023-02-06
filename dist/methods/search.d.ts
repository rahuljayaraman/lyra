import type { Lyra, PropertiesSchema, ResolveSchema, SearchProperties, BM25OptionalParams, PropertiesBoost, FacetsSearch } from "../types.js";
import { Language } from "../tokenizer/index.js";
import { FacetReturningValue } from "../facets.js";
export type RetrievedDoc<S extends PropertiesSchema> = {
    /**
     * The id of the document.
     */
    id: string;
    /**
     * The score of the document in the search.
     */
    score: number;
    /**
     * The document
     */
    document: ResolveSchema<S>;
};
export type SearchParams<S extends PropertiesSchema> = {
    /**
     * The word to search.
     */
    term: string;
    /**
     * The properties of the document to search in.
     */
    properties?: "*" | SearchProperties<S>[];
    /**
     * The number of matched documents to return.
     */
    limit?: number;
    /**
     * The number of matched documents to skip.
     */
    offset?: number;
    /**
     * Whether to match the term exactly.
     */
    exact?: boolean;
    /**
     * The maximum [levenshtein distance](https://en.wikipedia.org/wiki/Levenshtein_distance)
     * between the term and the searchable property.
     */
    tolerance?: number;
    /**
     * The BM25 parameters to use.
     *
     * k: Term frequency saturation parameter.
     * The higher the value, the more important the term frequency becomes.
     * The default value is 1.2. It should be set to a value between 1.2 and 2.0.
     *
     * b: Document length saturation impact. The higher the value, the more
     * important the document length becomes. The default value is 0.75.
     *
     * d: Frequency normalization lower bound. Default value is 0.5.
     *
     * @see https://en.wikipedia.org/wiki/Okapi_BM25
     */
    relevance?: BM25OptionalParams;
    /**
     * The boost to apply to the properties.
     *
     * The boost is a number that is multiplied to the score of the property.
     * It can be used to give more importance to some properties.
     *
     * @example
     * // Give more importance to the 'title' property.
     * const result = await search(db, {
     *  term: 'Michael',
     *  properties: ['title', 'author'],
     *  boost: {
     *   title: 2
     *  }
     * });
     *
     * // In that case, the score of the 'title' property will be multiplied by 2.
     */
    boost?: PropertiesBoost<S>;
    /**
     * Facets configuration
     *
     * A facet is a feature that allows users to narrow down their search results by specific
     * attributes or characteristics, such as category, price, or location.
     * This can help users find more relevant and specific results for their search query.
     *
     * @example
     *
     * const results = await search(db, {
     *  term: 'Personal Computer',
     *  properties: ['title', 'description', 'category.primary', 'category.secondary'],
     *  facets: {
     *    'category.primary': {
     *      size: 10,
     *      sort: 'ASC',
     *    }
     *  }
     * });
     */
    facets?: FacetsSearch<S>;
};
export type SearchResult<S extends PropertiesSchema> = {
    /**
     * The number of all the matched documents.
     */
    count: number;
    /**
     * An array of matched documents taking `limit` and `offset` into account.
     */
    hits: RetrievedDoc<S>[];
    /**
     * The time taken to search.
     */
    elapsed: bigint | string;
    /**
     * The facets results.
     */
    facets?: FacetReturningValue;
};
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
 */
export declare function search<S extends PropertiesSchema>(lyra: Lyra<S>, params: SearchParams<S>, language?: Language): Promise<SearchResult<S>>;
