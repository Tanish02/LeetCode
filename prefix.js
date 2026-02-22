// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Constraints:
// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters if it is non-empty.

//===========================================================================

// function lcp(strs) {
//   if (strs.length === 0) return "";
//   let prefix = "";
//   for (let i = 0; i < strs[0].length; i++) {
//     let char = strs[0][i];
//     {
//       for (let j of strs) {
//         if (i >= j.length || j[i] !== char) {
//           return prefix;
//         }
//       }
//     }
//     prefix += char;
//   }
//   return prefix;
// }
// console.log(lcp(["car", "carbon", "carpet"]));

// function lcp(strs) {
//   if (strs.length === 0) return "";
//   let result = "";
//   for (let i = 0; i < strs[0].length; i++) {
//     let char = strs[0][i];
//     {
//       for (let j of strs) {
//         if (i >= j.length || j[i] !== char) {
//           return result;
//         }
//       }
//     }
//     result += char;
//   }
//   return result;
// }
// console.log(lcp(["apple", "ape", "april"]));

function lcp(strs) {}
// ["car","carbon","carpet"] → ?
// ["apple","ape","april"] → ?
// ["dog","cat"] → ?
// ["interspecies","interstellar","interstate"] → ?
