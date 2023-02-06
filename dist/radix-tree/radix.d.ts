import { Node } from "./node.js";
export type FindParams = {
    term: string;
    exact?: boolean;
    tolerance?: number;
};
export type FindResult = Record<string, string[]>;
export declare function insert(root: Node, word: string, docId: string): void;
export declare function find(root: Node, { term, exact, tolerance }: FindParams): FindResult;
export declare function contains(root: Node, term: string): boolean;
export declare function removeWord(root: Node, term: string): boolean;
export declare function removeDocumentByWord(root: Node, term: string, docID: string, exact?: boolean): boolean;
