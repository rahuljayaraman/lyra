import { SUPPORTED_LANGUAGES } from "./tokenizer/languages.js";
function formatJSON(input) {
    return JSON.stringify(input, null, 2);
}
export function INVALID_SCHEMA_TYPE(type) {
    return `Invalid schema type. Expected string or object, but got ${type}`;
}
export function INVALID_DOC_SCHEMA(expected, found) {
    return `Invalid document structure. \nLyra has been initialized with the following schema: \n\n${formatJSON(expected)}\n\nbut found the following doc:\n\n${formatJSON(found)}`;
}
export function INVALID_PROPERTY(name, expected) {
    return `Invalid property name. Expected a wildcard string ("*") or array containing one of the following properties: ${expected.join(", ")}, but got: ${name}`;
}
export function CANT_DELETE_DOC_NOT_FOUND(id) {
    return `Document with ID ${id} does not exist.`;
}
export function CANT_DELETE_DOCUMENT(docID, key, token) {
    return `Unable to delete document "${docID}" from index "${key}" on word "${token}".`;
}
export function UNSUPPORTED_NESTED_PROPERTIES() {
    return `Nested properties are not supported in this Lyra version, but will be in the future.`;
}
export function DOC_ID_DOES_NOT_EXISTS(id) {
    return `Document with ID ${id} does not exists`;
}
export function GETTER_SETTER_WORKS_ON_EDGE_ONLY(method) {
    return `${method} works on edge only. Use edge: true in Lyra constructor to enable it.`;
}
export function INVALID_HOOKS_OBJECT() {
    return "Invalid hooks object";
}
export function NON_SUPPORTED_HOOKS(invalidHooks) {
    return `The following hooks aren't supported. Hooks: ${invalidHooks}`;
}
export function TYPE_ERROR_ID_MUST_BE_STRING(type) {
    return `"id" must be of type "string". Got "${type}" instead.`;
}
export function ID_ALREADY_EXISTS(id) {
    return `Document with ID "${id}" already exists.`;
}
export function LANGUAGE_NOT_SUPPORTED(lang) {
    return `Language "${lang}" is not supported.\nSupported languages are:\n - ${SUPPORTED_LANGUAGES.join("\n - ")}`;
}
export function CUSTOM_STOP_WORDS_ARRAY_MUST_BE_STRING_ARRAY() {
    return `Custom stop words array must only contain strings.`;
}
export function CUSTOM_STOP_WORDS_MUST_BE_FUNCTION_OR_ARRAY() {
    return `Custom stop words must be a function or an array of strings.`;
}
export function INVALID_STEMMER_FUNCTION_TYPE() {
    return `tokenizer.stemmingFn property must be a function.`;
}
export function INVALID_TOKENIZER_FUNCTION() {
    return `tokenizer.tokenizerFn must be a function.`;
}
export function INVALID_BOOST_VALUE() {
    return `Boost value must be a number greater than, or less than 0.`;
}

//# sourceMappingURL=errors.js.map