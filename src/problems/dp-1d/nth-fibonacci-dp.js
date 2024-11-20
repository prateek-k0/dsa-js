/*
    nth fibonacci - dp solution

    since nth fibonacci, fib[n] = fib[n-1] + fib[n-2];
    we can store fib[n-1] and fib[n-2] iteratively
*/

export function nthFibonacci(n) {
    const fibDP = new Array(n+1).fill(0);
    // initialize fib[0] = 0 and fib[1] = 1;
    fibDP[0] = 0;
    fibDP[1] = 1;
    // for other elements
    for(let i = 2; i < n+1; i++) {
        fibDP[i] = fibDP[i-1] + fibDP[i-2];
    }
    return fibDP[n];
}
