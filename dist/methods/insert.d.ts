import { Language } from "../tokenizer/index.js";
import type { Lyra, PropertiesSchema, ResolveSchema } from "../types.js";
export type InsertConfig<S extends PropertiesSchema> = {
    language?: Language;
    id?: (doc: ResolveSchema<S>) => string | Promise<string>;
};
export type InsertBatchConfig<S extends PropertiesSchema> = InsertConfig<S> & {
    batchSize?: number;
};
/**
 * Inserts a document into a database.
 * @param lyra The database to insert document into.
 * @param doc The document to insert.
 * @param config Optional parameter for overriding default configuration.
 * @returns An object containing id of the inserted document.
 * @example
 * const { id } = await insert(db, {
 *   quote: 'You miss 100% of the shots you don\'t take',
 *   author: 'Wayne Gretzky - Michael Scott'
 * });
 */
export declare function insert<S extends PropertiesSchema>(lyra: Lyra<S>, doc: ResolveSchema<S>, config?: InsertConfig<S>): Promise<{
    id: string;
}>;
/**
 * Inserts a document into a database.
 * @param lyra The database to insert document into.
 * @param doc The document to insert.
 * @param config Optional parameter for overriding default configuration.
 * @returns A Promise object containing id of the inserted document.
 * @example
 * const { id } = await insert(db, {
 *   quote: 'You miss 100% of the shots you don\'t take',
 *   author: 'Wayne Gretzky - Michael Scott'
 * });
 */
export declare function insertWithHooks<S extends PropertiesSchema>(lyra: Lyra<S>, doc: ResolveSchema<S>, config?: InsertConfig<S>): Promise<{
    id: string;
}>;
/**
 * Inserts a large array of documents into a database without blocking the event loop.
 * @param lyra The database to insert document into.
 * @param docs Array of documents to insert.
 * @param config Optional parameter for overriding default configuration.
 * @returns Promise<void>.
 * @example
 * insertBatch(db, [
 *   {
 *     quote: 'You miss 100% of the shots you don\'t take',
 *     author: 'Wayne Gretzky - Michael Scott'
 *   },
 *   {
 *     quote: 'What I cannot createm I do not understand',
 *     author: 'Richard Feynman'
 *   }
 * ]);
 */
export declare function insertBatch<S extends PropertiesSchema>(lyra: Lyra<S>, docs: ResolveSchema<S>[], config?: InsertBatchConfig<S>): Promise<void>;
