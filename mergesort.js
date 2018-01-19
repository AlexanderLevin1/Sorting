a = [4, 6, 2, 7, 10, 13, 1];
b = [5, 1];

function split(arr) {
    if (arr.length < 2) {
        return arr;
    } 
    var left = arr.slice(0, Math.floor(arr.length / 2));
    var right = arr.slice(Math.floor(arr.length / 2));
  }            


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
return result.concat(left.slice(iL)).concat(right.slice(iR))
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
    } else {
    var left = arr.slice(0, Math.floor(arr.length / 2));
    var right = arr.slice(Math.floor(arr.length / 2));
    }
  return merge(mergeSort(left), mergeSort(right));
}
