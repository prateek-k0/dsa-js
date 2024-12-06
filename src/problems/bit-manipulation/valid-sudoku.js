// https://leetcode.com/problems/valid-sudoku/

/*
    Instead of using 2d hash to store occurrences of a value, we use a number, with 
    the value'th bit set in the hash

    for example, if let board[r][c] = 3,
    so we can see if rowsHash[r] & (1 << 3) is true, if it is, return false
    same for colsHash and squaresHash
*/

export function validSudoku(board) {
    const n = 9;
    let rowsHash = new Array(n).fill(0);
    let colsHash = new Array(n).fill(0);
    let squaresHash = new Array(n).fill(0);

    for(let r = 0; r < n; r++) {
        for(let c = 0; c < n; c++) {
            if (board[r][c] === '.') continue;
            const value = board[r][c];
            // see if value'th bit is set in row, col and square
            if(rowsHash[r] & (1 << value)) return false;
            if(colsHash[c] & (1 << value)) return false;
            const squareKey = `${Math.floor(r / 3)},${Math.floor(c / 3)}`;
            if(squaresHash[squareKey] & (1 << value)) return false;
            // else, set that bit in row, col and square
            rowsHash[r] |= (1 << value);
            colsHash[c] |= (1 << value);
            squaresHash[squareKey] |= (1 << value);
        }
    }
    return true;
}