// Problem Statement #

// Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.

function max_subarray_size_k(k, arr) {
  // TODO: Write your code here
  let max = 0;
  let sum = 0;
  let start = 0;

  for (let i = 0; i < arr.length - k; i++) {
    sum += arr[i];

    if (i >= k - 1) {
      max = Math.max(max, sum);
      sum -= arr[start];
      start++;
    }
  }

  return max;
}


console.log(
  `Maximum sum of a subarray of size K: ${max_subarray_size_k(
    3,
    [2, 1, 5, 1, 3, 2]
  )}`
);

console.log(
  `Maximum sum of a subarray of size K: ${max_subarray_size_k(
    2,
    [2, 3, 4, 1, 5]
  )}`
);

