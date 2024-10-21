function partition(arr, l, r) {
    const pivot = r;
    let i = l;
    for(let j = l; j <= r; j++) {
        if(arr[j].distance < arr[pivot].distance) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
        }
    }
    [arr[i], arr[pivot]] = [arr[pivot], arr[i]];
    return i;
}

function quickSelect(arr, k) {
    if(k >= arr.length) return arr;
    let l = 0;
    let r = arr.length - 1;
    while(l < r) {
        const pivot = partition(arr, l, r);
        if(k === pivot) break;
        else if(k < pivot) r = pivot - 1;
        else l = pivot + 1;
    }
    // if l === r
    // return arr.slice(0, l);
}

export function kClosest(points, k) {
    const distances = points.map(([x, y]) => ({ points: [x, y], distance: x*x + y*y }));
    quickSelect(distances, k);
    return distances.slice(0,k).map((d) => d.points);
}