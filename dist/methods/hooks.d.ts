import type { Lyra, PropertiesSchema } from "../types.js";
export interface AfterInsertHook {
    <S extends PropertiesSchema = PropertiesSchema>(this: Lyra<S>, id: string): Promise<void> | void;
}
export type Hooks = {
    afterInsert?: AfterInsertHook | AfterInsertHook[];
};
export declare function validateHooks(hooks?: Hooks): void | never;
export declare function hookRunner<S extends PropertiesSchema>(this: Lyra<S>, funcs: Function | Function[], ...args: unknown[]): Promise<void>;
