import { uniqueId } from "../utils.js";
export function create(end = false, subWord = "", key = "") {
    const node = {
        id: uniqueId(),
        key,
        subWord,
        parent: null,
        children: {},
        docs: [],
        end,
        word: ""
    };
    Object.defineProperty(node, "toJSON", {
        value: serialize
    });
    return node;
}
export function updateParent(node, parent) {
    node.parent = parent.id;
    node.word = parent.word + node.subWord;
}
export function addDocument(node, docID) {
    node.docs.push(docID);
}
export function removeDocument(node, docID) {
    const index = node.docs.indexOf(docID);
    /* c8 ignore next 3 */ if (index === -1) {
        return false;
    }
    node.docs.splice(index, 1);
    return true;
}
/* c8 ignore next 5 */ function serialize() {
    const { word , subWord , children , docs , end  } = this;
    return {
        word,
        subWord,
        children,
        docs,
        end
    };
}

//# sourceMappingURL=node.js.map