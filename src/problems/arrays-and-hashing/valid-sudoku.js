// https://leetcode.com/problems/valid-sudoku/description/

/*
    We can use hash maps for this:
    1 hashmap for rows
    1 hashmap for cols
    1 hasmap for 3x3 squares
*/
/*
    for space efficient solution, see bit manipulation
*/

/* Time: o(n^2), space o(n^2) */
export function validSudoku(board) {
    const n = 9;
    const rowsHash = {};
    const colHash = {};
    const squaresHash = {};

    for(let r = 0; r < n; r++) {
        for(let c = 0; c < n; c++) {
            // if its empty, continue
            if(board[r][c] === '.') continue;
            // check in row
            if(rowsHash[r] === undefined) rowsHash[r] = {};
            else if(rowsHash[r][board[r][c]] !== undefined) return false;
            // check in col
            if(colHash[c] === undefined) colHash[c] = {};
            else if(colHash[c][board[r][c]] !== undefined) return false;
            // check in square
            const squareKey = `${Math.floor(r / 3)},${Math.floor(c / 3)}`;
            if(squaresHash[squareKey] === null || squaresHash[squareKey] === undefined) squaresHash[squareKey] = {};
            else if(squaresHash[squareKey][board[r][c]] !== undefined) return false;
            // if not in row, col, or square, add the value to hashes
            rowsHash[r][board[r][c]] = true;
            colHash[c][board[r][c]] = true;
            squareKey[squareKey][board[r][c]] = true;
        }
    }
    return true;
}