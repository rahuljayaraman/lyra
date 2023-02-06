const baseId = Date.now().toString().slice(5);
let lastId = 0;
const k = 1024;
const nano = BigInt(1e3);
const milli = BigInt(1e6);
const second = BigInt(1e9);
export const isServer = typeof window === "undefined";
export function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) {
        return "0 Bytes";
    }
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = [
        "Bytes",
        "KB",
        "MB",
        "GB",
        "TB",
        "PB",
        "EB",
        "ZB",
        "YB"
    ];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}
export function formatNanoseconds(value) {
    if (typeof value === "number") {
        value = BigInt(value);
    }
    if (value < nano) {
        return `${value}ns`;
    } else if (value < milli) {
        return `${value / nano}μs`;
    } else if (value < second) {
        return `${value / milli}ms`;
    }
    return `${value / second}s`;
}
export function getNanosecondsTime() {
    if (typeof process !== "undefined" && process.hrtime !== undefined) {
        return process.hrtime.bigint();
    }
    if (typeof performance !== "undefined") {
        return BigInt(Math.floor(performance.now() * 1e6));
    }
    // @todo: fallback to V8 native method to get microtime
    return BigInt(0);
}
export function uniqueId() {
    return `${baseId}-${lastId++}`;
}
export function getOwnProperty(object, property) {
    // Checks if `hasOwn` method is defined avoiding errors with older Node.js versions
    if (Object.hasOwn === undefined) {
        return Object.prototype.hasOwnProperty.call(object, property) ? object[property] : undefined;
    }
    return Object.hasOwn(object, property) ? object[property] : undefined;
}
export function getTokenFrequency(token, tokens) {
    let count = 0;
    for (const t of tokens){
        if (t === token) {
            count++;
        }
    }
    return count;
}
export function insertSortedValue(arr, el, compareFn = sortTokenScorePredicate) {
    let low = 0;
    let high = arr.length;
    let mid;
    while(low < high){
        mid = low + high >>> 1;
        if (compareFn(el, arr[mid]) < 0) {
            high = mid;
        } else {
            low = mid + 1;
        }
    }
    arr.splice(low, 0, el);
    return arr;
}
export function sortTokenScorePredicate(a, b) {
    return b[1] - a[1];
}
export function getNested(obj, path) {
    return path.split(".").reduce((o, p)=>typeof o === "object" ? o[p] : undefined, obj);
}

//# sourceMappingURL=utils.js.map