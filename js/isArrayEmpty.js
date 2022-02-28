const isArrayEmpty = (arr) => Array.isArray(arr) && !arr.length;

((function call(){
    isArrayEmpty([]);
    isArrayEmpty([1, 2, 4]);
}))