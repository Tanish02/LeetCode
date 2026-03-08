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

// problems
// ["car","carbon","carpet"] → ?
// ["apple","ape","april"] → ?
// ["dog","cat"] → ?
// ["interspecies","interstellar","interstate"] → ?
// ["aaa","aa","aaa"]

// function lcp() {
//   let strs = ["aaa", "aa", "aaa"];
//   if (strs.length === 0) return "";
//   let result = "";
//   for (let a = 0; a < strs[0].length; a++) {
//     let char = strs[0][a];
//     for (let j of strs) {
//       if (a >= j.length || j[a] !== char) {
//         return result;
//       }
//     }
//     result += char;
//   }
//   return result;
// }
// console.log(lcp());

function comp() {
  let str = ["interspecies", "interstellar", "interstate"];
  if (str.length === 0) return "";
  let result = "";
  for (let i = 0; i < str[0].length; i++) {
    let char = str[0][i];
    {
      for (let j of str) {
        if (i >= j.length || j[i] !== char) {
          return result;
        }
      }
    }
    result += char;
  }
  return result;
}
console.log(comp());

/*
function comp () {
if words array is empty
return ""
result = ""
for each character index i in first word
    currentChar = firstWord[i]
    for every word in array
        if word ended OR word[i] not equal currentChar
            return result
    add currentChar to result
}

*/
