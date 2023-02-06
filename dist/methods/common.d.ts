import type { Lyra, PropertiesSchema, ResolveSchema } from "../types.js";
import type { SearchParams } from "./search.js";
export declare function assertDocSchema<S extends PropertiesSchema>(doc: ResolveSchema<S>, lyraSchema: PropertiesSchema): void;
export declare function recursiveCheckDocSchema<S extends PropertiesSchema>(newDoc: ResolveSchema<S>, schema: PropertiesSchema): boolean;
export declare function getIndices<S extends PropertiesSchema>(lyra: Lyra<S>, indices: SearchParams<S>["properties"]): string[];
