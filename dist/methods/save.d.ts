import type { Data, Lyra, PropertiesSchema } from "../types.js";
export declare function save<S extends PropertiesSchema>(lyra: Lyra<S>): Promise<Data<S>>;
