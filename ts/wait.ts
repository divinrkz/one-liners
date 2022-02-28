const wait = (ms: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, ms));


/**
 * IIFE Exepression
 */
(async function call() {
    await wait(2000); // Waiting for 2 seconds
});