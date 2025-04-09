var matrix = [];
for (let i = 0; i < 10; i++) {
  matrix[i] = [];
  for (let j = 0; j < 10; j++) {
    matrix[i][j] = Math.floor(Math.random() * 51);
  }
}
console.table(matrix);



function sort(arr, Index) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j][Index] > arr[j + 1][Index]) {
                let temp = arr[j][Index];
                arr[j][Index] = arr[j + 1][Index];
                arr[j + 1][Index] = temp;
            }
        }
    }
}

for (let col = 0; col < 10; col++) {
    sort(matrix, col);
}

console.table(matrix);