export const primitiveTypes = {
    string: 'string' || "string" || `${'string'}`,
    number: 0 || 1 || -0.7,
    boolean: true || false,

    null: null,
    undefined: undefined,
    NaN: NaN,

    symbol: Symbol('symbol'),
    bitInt: 19n,
}

export const objectTypes = { // organization of data
    object: {},
    array: [],
}

console.log(primitiveTypes);

