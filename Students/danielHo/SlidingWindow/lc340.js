// Problem Statement #

// Given a string, find the length of the longest substring in it with no more than K distinct characters.

// You can assume that K is less than or equal to the length of the given string.

function longest_substring_with_k_distinct(str, k) {
  // TODO: Write code here
  if (k == 0) return 0

  // start and end pointers
  let start = 0;
  let end = 0;

  // Storing the characters
  let dict = {}

  let maxLength = 0;

  while (end < str.length) {
    if (dict.hasOwnProperty(str[end])) dict[str[end]]++;
    else dict[str[end]] = 1;
    console.log()

    while (Object.keys(dict) > k) {
      dict[str[start]]--;

      if (dict[str[start]] == 0) {
        delete dict[str[start]]
      }
      start++;
    }

    maxLength = Math.max(maxLength, end - start + 1)
    end++;
  }
  
  return maxLength;
}

console.log(
  `Length of the longest substring: ${longest_substring_with_k_distinct(
    'araaci',
    2
  )}`
);
console.log(
  `Length of the longest substring: ${longest_substring_with_k_distinct(
    'araaci',
    1
  )}`
);
console.log(
  `Length of the longest substring: ${longest_substring_with_k_distinct(
    'cbbebi',
    3
  )}`
);

