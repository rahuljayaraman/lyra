import type { Language } from "../languages.js";
type StopWordsMap = {
    [key in Language]: string[];
};
export declare const stopWords: Partial<StopWordsMap>;
export declare const availableStopWords: string[];
export {};
