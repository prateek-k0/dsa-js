// https://leetcode.com/problems/snakes-and-ladders/description

function calcCellPos(pos, n) {
    let row = Math.floor((pos - 1) / n);
    let col = (pos - 1) % n;
    col = (row % 2) === 1 ? n - col - 1 : col;
    row = n - row - 1;
    return [row, col];
}

export function snakesAndLadders(board = []) {
    const n = board.length;
    const q = [[1, 0]]; // current-cell-number, rolls till now (from 1st cell)
    const visited = {};
    visited[1] = true;
    while(q.length > 0) {
        const [currCell, rolls] = q.shift();
        if(currCell === n * n) {
            return rolls;
        }
        // else
        for(let dice = 1; (dice <= 6) && (currCell + dice <= n * n); dice++) {
            const diceResult = currCell + dice;
            const [r, c] = calcCellPos(diceResult, n);
            const cellVal = board[r][c];
            let newCell = cellVal !== -1 ? cellVal : diceResult;
            if(visited[newCell] !== true) {
                visited[newCell] = true;
                q.push([newCell, rolls + 1]);
            }
        }
    }
    return -1;
}