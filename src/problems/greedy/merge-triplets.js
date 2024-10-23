// https://leetcode.com/problems/merge-triplets-to-form-target-triplet/description/

export function mergeTriplets(triplets, target) {
    // in triplets arrray, there must be a triplet with at all of the numbers smaller than those of the target, otherwise its false

    let tripletCollapse = triplets.reduce((a, b) => {
        // merge only if elements <= targets
        if(b[0] <= target[0] && b[1] <= target[1] && b[2] <= target[2])
            return [Math.max(a[0], b[0]), Math.max(a[1], b[1]), Math.max(a[2], b[2])];
        // else previous accumulated value
        return a;
    }, [-Infinity, -Infinity, -Infinity]);

    // check if values are similar
    return (tripletCollapse[0] === target[0] && tripletCollapse[1] === target[1] && tripletCollapse[2] === target[2]);
}