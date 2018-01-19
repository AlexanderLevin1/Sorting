function swap(a, b) {
    temp = a;
    a = b;
    b = temp;
    arr[i] = a;
    arr[j] = b;
}
 var i, j;

function bubbleSort(arr) {
    if (!arr) {
        return arr;
    }
    for (i = 0; i < arr.length; i++) {
        for (j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[i]) {
               swap(arr[i], arr[j]);
            }
        }
    }
    return arr;
}
