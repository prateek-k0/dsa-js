// https://leetcode.com/problems/text-justification/

function spaceMaker(len) {
    return new Array(len).fill(' ').join('');
}

export function textJustification(words, maxWidth) {
    const rows = [[]];
    let currentRowLength = 0
    for (const word of words) {
        // last row
        const lastRow = rows[rows.length - 1];
        // there must be atleast 1 space char between each word in a row, 
        // so total spaces required = nWords * 1, nWords = number of words in that row
        // and to add new word, we need to add 1 for extra space
        if (currentRowLength === 0) {  // empty row
            lastRow.push(word);
            currentRowLength += word.length;
        } else if (currentRowLength + 1 + word.length <= maxWidth) { // partially filled row,still has space
            lastRow.push(word);
            currentRowLength += (word.length);
        } else {  // else, add new row
            rows.push([word]);
            currentRowLength = word.length;
        }
    }
    console.log(rows);
    // now, calculate shortfall for each row, and add spaces 
    // (if only 1 word, add trailing spaces)
    const rowStrings = [];
    for (let r = 0; r < rows.length; r++) {
        const row = rows[r];
        if (r === rows.length - 1) {
            rowStrings[r] = row.join(' ').padEnd(maxWidth, ' ');
            continue;
        }
        const nWords = row.length;
        let rowString = '';
        rowString += row[0];  // add first word with no leading space;
        const remainingSpaces = maxWidth - row.reduce((a, c) => a + c.length, 0);
        if (nWords === 1) {
            rowString = rowString.padEnd(maxWidth, ' ');
        } else {
            // for second words onwards
            // calculate max and min number of spaces required, between each word
            const maxSpaceBetween2Words = Math.ceil(remainingSpaces / (nWords - 1));
            const minSpaceBetween2Words = maxSpaceBetween2Words - 1;
            const nSpaces = nWords - 1;
            for (let i = 1; i < nWords; i++) {
                if (i * maxSpaceBetween2Words + (nSpaces - i) * minSpaceBetween2Words <= remainingSpaces) {
                    rowString += spaceMaker(maxSpaceBetween2Words);
                } else {
                    rowString += spaceMaker(minSpaceBetween2Words);
                }
                rowString += row[i];
            }
        }
        rowStrings.push(rowString);
    }
    return rowStrings;
}