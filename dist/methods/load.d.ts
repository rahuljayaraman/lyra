import type { Data, Lyra, PropertiesSchema } from "../types.js";
export declare function load<S extends PropertiesSchema>(lyra: Lyra<S>, { index, docs, schema, frequencies, tokenOccurrencies, defaultLanguage, fieldLengths, avgFieldLength }: Data<S>): Promise<void>;
