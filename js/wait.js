const wait = (ms) => new Promise((resolve) => {setTimeout(ms, resolve)});

(async function call() {
    await wait(2000); // Wait for 2 seconds
})