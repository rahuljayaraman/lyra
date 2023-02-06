import type { Nullable } from "../types.js";
export interface Node {
    id: string;
    key: string;
    subWord: string;
    parent: Nullable<string>;
    children: Record<string, Node>;
    docs: string[];
    end: boolean;
    word: string;
}
export declare function create(end?: boolean, subWord?: string, key?: string): Node;
export declare function updateParent(node: Node, parent: Node): void;
export declare function addDocument(node: Node, docID: string): void;
export declare function removeDocument(node: Node, docID: string): boolean;
