// Problem Statement #

// Given a string, find the length of the longest substring in it with no more than K distinct characters.

// You can assume that K is less than or equal to the length of the given string.

function longest_substring_with_k_distinct(str, k) {
  // TODO: Write code here
  var [r,l,ans,counter] = [0,0,0,0];
  var hash = {};
  while (r < str.length) {
    var rChar = str[r];
    if (!hash[rChar ]) {
      hash[rChar] = 1;
      counter++;
    } else {
      hash[rChar]++;
    }
​
    while (counter === k+1) {
      var lChar = str[l];
      hash[lChar]--;
      if (hash[lChar] === 0) counter--;
      l++;
    }
​
    ans = Math.max(ans, r-l+1);
    r++;
  }
​
  return ans;
}

/* Python Solution */
// from collections import defaultdict
// class Solution:
//     def lengthOfLongestSubstringKDistinct(self, s: str, k: int) -> int:
//         '''
//         data structure: dictionary to store the frequency count of characters in s
// ​
//         i = 0 => left pointer
//         j => right pointer (to be incremented in the for loop)
        
//         res = res vs (right pointer - left pointer + 1)
        
//         if (len(d) > k):
//             decrement the counter value of left pointer by 1
//             if it reaches zero, then we delete it from the dictionary
//             so that we are not counting extra characters.
//         '''
//         d = defaultdict(int)
//         i, res = 0, 0
//         for j in range(len(s)):
//             d[s[j]] += 1
//             if len(d) > k:
//                 d[s[i]] -= 1
//                 if d[s[i]] == 0:
//                     del d[s[i]]
//                 i += 1 # bump up the left pointer
//             res = max(res, j - i + 1)
//         return res

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

