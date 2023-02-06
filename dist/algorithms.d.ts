import type { BM25Params, TokenScore } from "./types.js";
export declare function intersectTokenScores(arrays: TokenScore[][]): TokenScore[];
export declare function prioritizeTokenScores(arrays: TokenScore[][], boost: number): TokenScore[];
export declare function BM25(tf: number, matchingCount: number, docsCount: number, fieldLength: number, averageFieldLength: number, BM25Params: BM25Params): number;
