// find duplicate in an array:
/*
in an array of numbers, find the number occuring more than once and print their occurrences
*/

export function findDuplicate(arr = []) {
    const occurrences = {}; // obj to store occurrences of elements
    arr.forEach((element) => {
        occurrences[element] = (occurrences[element] ?? 0) + 1;
    });
    return Object.entries(occurrences).filter(([k, v]) => v > 1);
}