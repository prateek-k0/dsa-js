/*
    nth fibonacci with matrix exponentiation
    https://www.geeksforgeeks.org/program-for-nth-fibonacci-number/#using-matrix-exponentiation-ologn-time-and-ologn-space

    To find the Nth Fibonacci number we need to multiple transformation matrix (n-1) times, the matrix equation for the Fibonacci sequence looks like:
    let matrixA =
    [1, 1]
    [1, 0]
    then, (matrixA) ^ n-1 = 
    [Fib(n), Fib(n-1)]
    [Fib(n-1), Fib(n-1)]

    we can use binary exponentiation for log(n) time
*/

function matrixMultiplication(mat1, mat2) { // matrix multiplication for 2x2 matrix
    // Perform matrix multiplication
    const x = mat1[0][0] * mat2[0][0] + mat1[0][1] * mat2[1][0];
    const y = mat1[0][0] * mat2[0][1] + mat1[0][1] * mat2[1][1];
    const z = mat1[1][0] * mat2[0][0] + mat1[1][1] * mat2[1][0];
    const w = mat1[1][0] * mat2[0][1] + mat1[1][1] * mat2[1][1];

    // Update matrix mat1 with the result
    mat1[0][0] = x;
    mat1[0][1] = y;
    mat1[1][0] = z;
    mat1[1][1] = w;
}

function matrixBinaryExponentiation(mat, n) {
    if(n <= 1) return;  // dont calculate power 
    const multiplyingMatrix = [[1, 1], [1, 0]];
    // we dont need to store a new result, since we'll update the matrix
    while(n > 0) {
        if(n % 2 === 1) {   // odd
            matrixMultiplication(mat, multiplyingMatrix);
        }
        n = Math.floor(n / 2);  // halve the exponent
        matrixMultiplication(multiplyingMatrix, multiplyingMatrix); // square the multiplying matrix
    }
}

export function nthFibonacci(n) {   // nth is 0th index,  fib[0] = 0, fib[1] = 1;
    // base conditions
    if (n === 0) return 0;
    if (n === 1) return 1;
    const matrix = [[1, 1], [1, 0]];
    matrixBinaryExponentiation(matrix, n-2);
    return matrix[0][0];
}
