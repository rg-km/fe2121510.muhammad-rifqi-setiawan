// Sort array terlebih dahulu, kemudian rotasi ke kiri sesuai dengan nilai yang telah ditentukan.
//
// Contoh Sort array:
// Input: [4,5,2,1,3]
// Output: [1,2,3,4,5]

//Contoh RotateLeft:
//Input: 4, [1,2,3,4,5]
//Output: [5,1,2,3,4]

// Explanation RotateLeft:
// untuk melakukan rotasi kiri dengan nilai 4, array mengalami urutan perubahan berikut:
// [1,2,3,4,5] -> [2,3,4,5,1] -> [3,4,5,1,2] -> [4,5,1,2,3] -> [5,1,2,3,4]

function sort(arr) {
    // TODO: replace this
    let swapped = false;
  for (let i = 0; i < arr.length; i++) {
    console.log({ iteration: i });
    for (let j = 0; j < arr.length - 1; j++) {
      console.log({ awal: arr[j], nextNilai: arr[j + 1] });
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
        swapped = true;
      }
    }
    if (!swapped) {
      return arr;
    }
  }
  return arr;
    
}

function rotateLeft(d, arr) {
    // TODO: replace this
    let length = arr.length;
    let result = arr.slice(d, length); // [5]
    for (let i = 0; i < d && i < length; i++) {
    console.log({ elemennya: arr[i], i, result });
 
    result.push(arr[i]);
  }
  return result;
}

let nums = [4, 5, 2, 1, 3]
let sorted = sort(nums)
console.log(sorted)
rotated = rotateLeft(4, sorted)
console.log(rotated)

module.exports = { sort, rotateLeft }