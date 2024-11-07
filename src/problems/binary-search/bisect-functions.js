// bisect left (lower bound) & bisect right (upper bound);

export function bisectLeft(arr, x) {
    let l = 0;
    let r = arr.length - 1;
    let m = 0;
    while(l <= r) {
      m = Math.floor((l + r) / 2);
      if(arr[m] >= x) { // if its equal, go left
        r = m - 1;
      } else {
        l = m + 1;
      }
    }
    return l;
}

export function bisectRight(arr, x) {
    let l = 0;
    let r = arr.length - 1;
    let m = 0;
    while(l <= r) {
      m = Math.floor((l + r) / 2);
      if(arr[m] <= x) { // if its equal, go right
        l = m + 1;
      } else {
        r = m - 1;
      }
    }
    return l;
}