# Recursion

Using iterative and recursive algorithm to fined fibonacci

```JS

// Iteratively
function fibsIterative(times) {
  if (times === 0) return [0];

  let arr = [0, 1];
  for (let i = 1; i < times; i++) {
    const [current, next] = arr.slice(-2);
    arr.push(current + next);
  }

  return arr;
}

// Recursively
function fibsRecursive(times, arr = [0, 1]) {
  if (times === 0) {
    return [0];
  }
  if (times === 1) {
    return arr;
  }

  [next, current] = arr.slice(-2);

  return fibsRecursive(times - 1, [...arr, current + next]);
}

console.log('-------------------- Iterative --------------------');
console.log(fibsIterative(8));
console.log('-------------------- Recursive --------------------');
console.log(fibsRecursive(8));

```

Using the mergesort recursive algorithm to sort an array 

```JS

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

```