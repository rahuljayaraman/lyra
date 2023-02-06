import { defaultTokenizerConfig } from "../tokenizer/index.js";
import * as ERRORS from "../errors.js";
import { create as createNode } from "../radix-tree/node.js";
import { validateHooks } from "./hooks.js";
import { intersectTokenScores } from "../algorithms.js";
/**
 * Creates a new database.
 * @param properties Options to initialize the database with.
 * @example
 * // Create a database that stores documents containing 'author' and 'quote' fields.
 * const db = await create({
 *   schema: {
 *     author: 'string',
 *     quote: 'string'
 *   },
 *   hooks: {
 *     afterInsert: [afterInsertHook],
 *   }
 * });
 */ export async function create(properties) {
    var _properties_defaultLanguage, _properties_components, _properties_components1, _properties_components2, _properties_components_algorithms;
    const defaultLanguage = (properties === null || properties === void 0 ? void 0 : (_properties_defaultLanguage = properties.defaultLanguage) === null || _properties_defaultLanguage === void 0 ? void 0 : _properties_defaultLanguage.toLowerCase()) ?? "english";
    const tokenizer = defaultTokenizerConfig(defaultLanguage, ((_properties_components = properties.components) === null || _properties_components === void 0 ? void 0 : _properties_components.tokenizer) ?? {});
    tokenizer.assertSupportedLanguage(defaultLanguage);
    validateHooks(properties.hooks);
    const instance = {
        defaultLanguage,
        schema: properties.schema,
        docs: {},
        docsCount: 0,
        index: {},
        hooks: properties.hooks || {},
        edge: properties.edge ?? false,
        frequencies: {},
        tokenOccurrencies: {},
        avgFieldLength: {},
        fieldLengths: {},
        components: {
            elapsed: ((_properties_components1 = properties.components) === null || _properties_components1 === void 0 ? void 0 : _properties_components1.elapsed) ?? {},
            tokenizer,
            algorithms: {
                intersectTokenScores: ((_properties_components2 = properties.components) === null || _properties_components2 === void 0 ? void 0 : (_properties_components_algorithms = _properties_components2.algorithms) === null || _properties_components_algorithms === void 0 ? void 0 : _properties_components_algorithms.intersectTokenScores) ?? intersectTokenScores
            }
        }
    };
    buildIndex(instance, properties.schema);
    return instance;
}
function buildIndex(lyra, schema, prefix = "") {
    for (const prop of Object.keys(schema)){
        const propType = typeof prop;
        const isNested = typeof schema[prop] === "object";
        if (propType !== "string") throw new Error(ERRORS.INVALID_SCHEMA_TYPE(propType));
        const propName = `${prefix}${prop}`;
        if (isNested) {
            buildIndex(lyra, schema[prop], `${propName}.`);
        } else {
            lyra.index[propName] = createNode();
            lyra.avgFieldLength[propName] = 0;
        }
    }
}

//# sourceMappingURL=create.js.map