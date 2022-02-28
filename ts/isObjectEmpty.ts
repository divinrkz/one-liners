const isObjectEmpty = (obj: unknown): boolean => obj && (Object.keys(obj).length === 0);


((function call() {
    isObjectEmpty({}) // true
    isObjectEmpty({a: 1, b: 2}) // false
}))