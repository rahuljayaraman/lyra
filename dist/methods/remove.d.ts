import type { Lyra, PropertiesSchema } from "../types.js";
/**
 * Removes a document from a database.
 * @param lyra The database to remove the document from.
 * @param docID The id of the document to remove.
 * @example
 * const isDeleted = await remove(db, 'L1tpqQxc0c2djrSN2a6TJ');
 */
export declare function remove<S extends PropertiesSchema>(lyra: Lyra<S>, docID: string): Promise<boolean>;
