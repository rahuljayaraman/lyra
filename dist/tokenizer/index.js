import { stemmer } from "../stemmer/en.js";
import { replaceDiacritics } from "./diacritics.js";
import * as ERRORS from "../errors.js";
import { SUPPORTED_LANGUAGES } from "./languages.js";
import { availableStopWords, stopWords } from "./stop-words/index.js";
export * from "./languages.js";
const splitRegex = {
    dutch: /[^a-z0-9_'-]+/gim,
    english: /[^a-z0-9_'-]+/gim,
    french: /[^a-z0-9äâàéèëêïîöôùüûœç-]+/gim,
    italian: /[^a-z0-9_'-]+/gim,
    norwegian: /[^a-z0-9_æøåÆØÅäÄöÖüÜ]+/gim,
    portuguese: /[^a-z0-9à-úÀ-Ú]/gim,
    russian: /[^a-z0-9а-яА-ЯёЁ]+/gim,
    spanish: /[^a-z0-9A-Zá-úÁ-ÚñÑüÜ]+/gim,
    swedish: /[^a-z0-9_åÅäÄöÖüÜ-]+/gim,
    german: /[^a-z0-9A-ZäöüÄÖÜß]+/gim,
    finnish: /[^a-z0-9äöÄÖ]+/gim,
    danish: /[^a-z0-9æøåÆØÅ]+/gim,
    hungarian: /[^a-z0-9áéíóöőúüűÁÉÍÓÖŐÚÜŰ]+/gim,
    romanian: /[^a-z0-9ăâîșțĂÂÎȘȚ]+/gim,
    serbian: /[^a-z0-9čćžšđČĆŽŠĐ]+/gim,
    turkish: /[^a-z0-9çÇğĞıİöÖşŞüÜ]+/gim,
    lithuanian: /[^a-z0-9ąčęėįšųūžĄČĘĖĮŠŲŪŽ]+/gim,
    arabic: /[^a-z0-9أ-ي]+/gim,
    nepali: /[^a-z0-9अ-ह]+/gim,
    irish: /[^a-z0-9áéíóúÁÉÍÓÚ]+/gim,
    indian: /[^a-z0-9अ-ह]+/gim,
    armenian: /[^a-z0-9ա-ֆ]+/gim,
    greek: /[^a-z0-9α-ωά-ώ]+/gim,
    indonesian: /[^a-z0-9]+/gim,
    ukrainian: /[^a-z0-9а-яА-ЯіїєІЇЄ]+/gim
};
export const normalizationCache = new Map();
function normalizeToken(token, language, tokenizerConfig) {
    const key = `${language}:${token}`;
    if (normalizationCache.has(key)) {
        return normalizationCache.get(key);
    }
    // Check if stop-words removal is enabled
    if (tokenizerConfig === null || tokenizerConfig === void 0 ? void 0 : tokenizerConfig.enableStopWords) {
        // Remove stop-words
        if (tokenizerConfig.customStopWords.includes(token)) {
            const token = "";
            normalizationCache.set(key, token);
            return token;
        }
    }
    // Check if stemming is enabled
    if (tokenizerConfig === null || tokenizerConfig === void 0 ? void 0 : tokenizerConfig.enableStemming) {
        // Stem token when a stemming function is available
        if (typeof (tokenizerConfig === null || tokenizerConfig === void 0 ? void 0 : tokenizerConfig.stemmingFn) === "function") {
            token = tokenizerConfig === null || tokenizerConfig === void 0 ? void 0 : tokenizerConfig.stemmingFn(token);
        }
    }
    token = replaceDiacritics(token);
    normalizationCache.set(key, token);
    return token;
}
/* c8 ignore next 10 */ function trim(text) {
    while(text[text.length - 1] === ""){
        text.pop();
    }
    while(text[0] === ""){
        text.shift();
    }
    return text;
}
function assertSupportedLanguage(language) {
    if (!SUPPORTED_LANGUAGES.includes(language)) {
        throw new Error(ERRORS.LANGUAGE_NOT_SUPPORTED(language));
    }
}
export function tokenize(input, language = "english", allowDuplicates = false, tokenizerConfig = defaultTokenizerConfig(language)) {
    /* c8 ignore next 3 */ if (typeof input !== "string") {
        return [
            input
        ];
    }
    const splitRule = splitRegex[language];
    const tokens = input.toLowerCase().split(splitRule).map((token)=>normalizeToken(token, language, tokenizerConfig)).filter(Boolean);
    const trimTokens = trim(tokens);
    if (!allowDuplicates) {
        return Array.from(new Set(trimTokens));
    }
    return trimTokens;
}
export function defaultTokenizerConfig(language, tokenizerConfig = {}) {
    let defaultStopWords = [];
    let customStopWords = [];
    let defaultStemmingFn;
    let defaultTokenizerFn = tokenize;
    // Enable custom tokenizer function
    if (tokenizerConfig === null || tokenizerConfig === void 0 ? void 0 : tokenizerConfig.tokenizerFn) {
        if (typeof tokenizerConfig.tokenizerFn !== "function") {
            throw Error(ERRORS.INVALID_TOKENIZER_FUNCTION());
        }
        /* c8 ignore next 4 */ defaultTokenizerFn = tokenizerConfig.tokenizerFn;
    // If there's no custom tokenizer, we can proceed setting custom
    // stemming functions and stop-words.
    } else {
        // Enable custom stemming function
        if (tokenizerConfig === null || tokenizerConfig === void 0 ? void 0 : tokenizerConfig.stemmingFn) {
            if (typeof tokenizerConfig.stemmingFn !== "function") {
                throw Error(ERRORS.INVALID_STEMMER_FUNCTION_TYPE());
            }
            defaultStemmingFn = tokenizerConfig.stemmingFn;
        } else {
            defaultStemmingFn = stemmer;
        }
        // Enable default stop-words
        if (availableStopWords.includes(language)) {
            /* c8 ignore next */ defaultStopWords = stopWords[language] ?? [];
        }
        if (tokenizerConfig === null || tokenizerConfig === void 0 ? void 0 : tokenizerConfig.customStopWords) {
            switch(typeof tokenizerConfig.customStopWords){
                // Execute the custom step-words function.
                // This will pass the default step-words for a given language as a first parameter.
                case "function":
                    customStopWords = tokenizerConfig.customStopWords(defaultStopWords);
                    break;
                // Check if the custom step-words is an array.
                // If it's an object, throw an exception. If the array contains any non-string value, throw an exception.
                case "object":
                    if (!Array.isArray(tokenizerConfig.customStopWords)) {
                        throw Error(ERRORS.CUSTOM_STOP_WORDS_MUST_BE_FUNCTION_OR_ARRAY());
                    }
                    customStopWords = tokenizerConfig.customStopWords;
                    if (customStopWords.some((x)=>typeof x !== "string")) {
                        throw Error(ERRORS.CUSTOM_STOP_WORDS_ARRAY_MUST_BE_STRING_ARRAY());
                    }
                    break;
                // By default, throw an exception, as this is a misconfiguration.
                default:
                    throw Error(ERRORS.CUSTOM_STOP_WORDS_MUST_BE_FUNCTION_OR_ARRAY());
            }
        }
    }
    return {
        /* c8 ignore next 5 */ enableStopWords: (tokenizerConfig === null || tokenizerConfig === void 0 ? void 0 : tokenizerConfig.enableStopWords) ?? true,
        enableStemming: (tokenizerConfig === null || tokenizerConfig === void 0 ? void 0 : tokenizerConfig.enableStemming) ?? true,
        stemmingFn: defaultStemmingFn,
        customStopWords: customStopWords ?? defaultStopWords,
        tokenizerFn: defaultTokenizerFn,
        assertSupportedLanguage: tokenizerConfig.assertSupportedLanguage ?? assertSupportedLanguage
    };
}

//# sourceMappingURL=index.js.map