a = [4, 6, 2, 7, 10, 13, 1];
b = [5, 1];

function split(arr) { 
    var left = arr.slice(0, Math.floor(arr.length / 2));
    var right = arr.slice(Math.floor(arr.length / 2));
    return [left, right];
  };

// compares 2 single item arrays and puts them in order.
function merge(left, right) {
    var result = [],
        iL = 0,
        iR = 0;

    while (iL < left.length && iR < right.length){
        if (left[iL] < right[iR]) {
            result.push(left[iL++]);
        } else {
            result.push(right[iR++])
        }
    }
return result.concat(left.slice(iL)).concat(right.slice(iR));
}

/* Concise merge syntax
function merge(left, right) {
    var result = [];
    while (left.length > 0 && right.length > 0) {
        result.push(left[0] < right[0] ? left.shift() : right.shift());
      }
    return result.concat(left.length ? left : right);
}
*/

function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    } 
  return merge(mergeSort(split(arr)[0]), mergeSort(split(arr)[1]));
}


console.log(mergeSort(a));
/* Notes:
-- an array of length 1 is sorted
-- can't return two variables, have to return an object (or array)
*/

/*
function mergeSort(arr) {
    if (arr.length <= 2) {
        return arr;
    }
    var middle - Math.floor(arr.length / 2);
    var left = mergeSort(arr.slice(0, middle));
    var right = mergeSort(arr.slice(middle));

    var results = [];
    while (left.length && right.length) {
        if(left[0] < right[0]) { 
            results.push(left.shift())
        }
        else { 
            results.push(right.shift())
        }
    }
if (left.length) {
    results = results.concat(left);
} 
if (right.length) {
    results = results.concat(right);
}
return results;
}

console.log(mergeSort([2, 1, 0]);
[2], [ 0, 1]
- result [0]
left with [2] and [1] and compares those
- result [0 , 1];
left with [2] and [];
[0, 1, 2];

*/
