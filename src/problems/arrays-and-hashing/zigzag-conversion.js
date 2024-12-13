// https://leetcode.com/problems/zigzag-conversion/description

export function zigzagConversion(s, numRows) {
    if (numRows === 1 || numRows >= s.length) return s;
    const rows = new Array(numRows).fill().map(() => new Array(0).fill());
    let currentRow = 0;
    let down = true;    // true = down, false = up;
    for (const char of s) {
        rows[currentRow].push(char);
        if (currentRow === numRows - 1) down = false;
        else if (currentRow === 0) down = true;
        if (down === true) currentRow++;
        else currentRow--;
    }
    return rows.reduce((a, c) => a + c.join(''), '');
}