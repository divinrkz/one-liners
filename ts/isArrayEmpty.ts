const isArrayEmpty = (arr: unknown[]): boolean => Array.isArray(arr) && !arr.length;

((function call(){
    isArrayEmpty([]);
    isArrayEmpty([1, 2, 4]);
}))