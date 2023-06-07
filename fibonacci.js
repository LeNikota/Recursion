/*
  //My first solution iteratively

  function fibsIterative(times) {
    let current = 0;
    let next = 1;
    let arr = [0];

    for (let i = 0; i < times; i++) {
      if(i === 0){
        arr.push(1)
        continue;
      }
      const sum = current + next;
      current = next;
      next = sum;
      arr.push(sum);
    }

    return arr
  }


  // Optimized by ChatGPT

  function fibsIterative(times) {
    if (times === 0) return [0];

    let arr = [0, 1];

    for (let i = 1; i < times; i++) {
      const [current, next] = arr.slice(-2);
      arr.push(current + next);
    }

    return arr;
  }



  
  // Not the optimal solution due to constantly growing stackcalls 

  function fibsRecursive(times) {
    if(times > 1){
      return fibsRecursive(times - 1) + fibsRecursive(times - 2);
    } else {
      return (times === 1) ? 1 : 0;
    }
  }


  // With memoization (allow caching already found values) optimization

  function fibsRecursive(times, cache = {}) {
    if(times in cache){
      return cache[times]
    }
    
    cache[times] = (times > 1) ? fibsRecursive(times - 1, cache) + fibsRecursive(times - 2, cache) : times;

    return cache[times];
  }


  // The optimal solution taking in to account tail recursion for the stack overflow avoidance

  function fibsRecursive(times, current = 0, next = 1) {
    if (times === 0) {
      return current;
    }
    if (times === 1) {
      return next;
    }
    return fibsRecursive(times - 1, next, current + next);
  }

*/



function fibsIterative(times) {
  if (times === 0) return [0];

  let arr = [0, 1];
  for (let i = 1; i < times; i++) {
    const [current, next] = arr.slice(-2);
    arr.push(current + next);
  }

  return arr;
}

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

console.log(fibsIterative(0));
console.log(fibsIterative(1));
console.log(fibsIterative(8));
console.log(fibsIterative(10));

console.log('-------------------- Recursive --------------------');

console.log(fibsRecursive(0));
console.log(fibsRecursive(1));
console.log(fibsRecursive(8));
console.log(fibsRecursive(10));