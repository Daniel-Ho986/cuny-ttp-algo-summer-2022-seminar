// Problem Statement #

// Given an array of positive numbers and a positive number ‘S,’ find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0 if no such subarray exists.

function smallest_subarray_with_given_sum(s, arr) {
  // TODO: Write code here


  let start  = 0;
  let sum = 0;
  let minLength = Infinity;


  for(let i = 0; i < arr.length; i++) {
    sum += arr[i];

    while(sum >= s) {
      minLength = Math.min(minLength, i - start + 1)
      sum -= arr[start]
      start++;
    }
  }

  return minLength;

}

console.log(
  `Smallest subarray length: ${smallest_subarray_with_given_sum(
    7,
    [2, 1, 5, 2, 3, 2]
  )}`
);
console.log(
  `Smallest subarray length: ${smallest_subarray_with_given_sum(
    7,
    [2, 1, 5, 2, 8]
  )}`
);
console.log(
  `Smallest subarray length: ${smallest_subarray_with_given_sum(
    8,
    [3, 4, 1, 1, 6]
  )}`
);

