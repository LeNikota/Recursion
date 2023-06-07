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

Using THE recursive algorithm to sort an array using merge sort

```JS

```