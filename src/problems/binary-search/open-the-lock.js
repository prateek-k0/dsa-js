// https://leetcode.com/problems/open-the-lock/description/

/*
    consider a graph from '0000' to target, with neighbours 1 rotation left and right (total 2), 
    per circle

    Time complexity: ((4 * 2) ^ n)
*/

export function openTheLock(deadends, target) {
    const deadendsObj = {};
    for(const deadend of deadends) {
        deadendsObj[deadend] = true;
    }
    // if start is a deadend, return -1;
    if(deadendsObj['0000'] === true) return -1;
    const q = [['0000', 0]];    // current combination, turns from '0000'
    const visited = {};
    visited['0000'] = true;
    while(q.length > 0) {
        const [combo, turns] = q.shift();
        if(combo === target) return turns;
        // else, enqueue its neighbours
        for(let i = 0; i < 4; i++) {
            const digit = +combo[i];
            const nextDigit = (digit+1) % 10;  // there are 10 digits, 0...9
            const prevDigit = ((digit-1) + 10) % 10;
            const nextCombo = combo.slice(0, i) + nextDigit + combo.slice(i+1);
            const prevCombo = combo.slice(0, i) + prevDigit + combo.slice(i+1);
            if(visited[nextCombo] !== true && deadendsObj[nextCombo] !== true) {
                visited[nextCombo] = true;
                q.push([nextCombo, turns+1]);
            }
            if(visited[prevCombo] !== true && deadendsObj[prevCombo] !== true) {
                visited[prevCombo] = true;
                q.push([prevCombo, turns+1]);
            }
        }
    }
    return -1;
}