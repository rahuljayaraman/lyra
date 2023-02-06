import type { FacetsSearch, PropertiesSchema, ResolveSchema, TokenScore } from "./types.js";
export type FacetReturningValue = {
    [key: string]: {
        count: number;
        values: {
            [key: string]: number;
        };
    };
};
export declare function getFacets<S extends PropertiesSchema>(schema: PropertiesSchema, docs: Record<string, ResolveSchema<S> | undefined>, results: TokenScore[], facetsConfig: FacetsSearch<S>): FacetReturningValue;
