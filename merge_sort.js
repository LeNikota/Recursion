function mergeSort(arr) {
  if(arr.length === 1){
    return arr;
  } else {
    const midIndex = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0,midIndex))
    const right = mergeSort(arr.slice(midIndex))

    return merge(left,right);
  }
}

function merge(leftArr, rightArr) {
  const mergedArr = [];
  let leftIndex = 0; // Left finger
  let rightIndex = 0; // Right finger

  while (leftIndex < leftArr.length && rightIndex < rightArr.length) { 
    if (leftArr[leftIndex] < rightArr[rightIndex]) {
      mergedArr.push(leftArr[leftIndex]);
      leftIndex++;
    } else {
      mergedArr.push(rightArr[rightIndex]);
      rightIndex++;
    }
  }

  // Add the remaining elements from either leftArr or rightArr
  while (leftIndex < leftArr.length) {
    mergedArr.push(leftArr[leftIndex]);
    leftIndex++
  }
  while (rightIndex < rightArr.length) {
    mergedArr.push(rightArr[rightIndex]);
    rightIndex++
  }
  return mergedArr;
}

const array = [6,3,2,7,8,4,1,5];

console.log(array);
console.log(mergeSort(array));










/*
// ChatGPT optimized

Optimization for small arrays
Use a threshold value for small arrays to switch to a different sorting algorithm, like insertion sort, which can be more efficient for small inputs.

Avoid unnecessary array slicing.
Avoid unnecessary array slicing by passing start and end indices to represent subarrays instead of creating new arrays in each recursive call.

function mergeSort(arr, start = 0, end = arr.length - 1) {
  const threshold = 5; // Threshold value for switching to a different sorting algorithm

  if (end - start < threshold) {
    // Use a different sorting algorithm (e.g., insertion sort) for small arrays
    return insertionSort(arr, start, end);
  } else {
    const midIndex = Math.floor((start + end) / 2);
    const left = mergeSort(arr, start, midIndex);
    const right = mergeSort(arr, midIndex + 1, end);

    return merge(left, right);
  }
}

function merge(leftArr, rightArr) {
  const mergedArr = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    if (leftArr[leftIndex] < rightArr[rightIndex]) {
      mergedArr.push(leftArr[leftIndex]);
      leftIndex++;
    } else {
      mergedArr.push(rightArr[rightIndex]);
      rightIndex++;
    }
  }

  while (leftIndex < leftArr.length) {
    mergedArr.push(leftArr[leftIndex]);
    leftIndex++;
  }
  while (rightIndex < rightArr.length) {
    mergedArr.push(rightArr[rightIndex]);
    rightIndex++;
  }
  return mergedArr;
}

function insertionSort(arr, start, end) {
  for (let i = start + 1; i <= end; i++) {
    const current = arr[i];
    let j = i - 1;

    while (j >= start && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }

  return arr.slice(start, end + 1);
}

const array = [6, 3, 2, 7, 8, 4, 1, 5];
console.log(mergeSort(array));
*/