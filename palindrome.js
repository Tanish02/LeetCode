// Example 1:
// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

// Example 2:
// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

// Example 3:
// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

//=========================================================================

// let x = 121
// function pal (x) {
// convert the number into string
// reverce()
// convert string2 to string1
//if same true else false
//print output
//}

// two pointer approach
// function isPal() {
//   let x = "121";
//   let str = x.toString();
//   console.log(str);

//   let i = 0;
//   let j = str.length - 1;
//   while (i < j) {
//     if (str[i] !== str[j]) {
//       return false;
//     }
//     i++;
//     j--;
//   }
//   return true;
// }
// console.log(isPal());

// //==========================
// // string reversal
// function palindromeCheck(num) {
//   let numStr = num.toString();
//   let result = numStr.split("").reverse().join("");
//   return numStr === result;
// }

// console.log(palindromeCheck(121));
// console.log(palindromeCheck(123));

//  x = "1234321" check

// function pal() {
//   let x = "1234321";
//   console.log(x);
//   let a = x.toLocaleString();
//   let result = a.split("").reverse("").join("");
//   return a === result;
// }

// console.log(pal());

//===================================== STRING ======================================

// madam
// racecar
// rat
// pen

function isPal(x) {
  let a = x.toUpperCase();
  let result = a.split("").reverse("").join("");
  return result === a;
}
console.log(isPal("Madam"));

function pal(x) {
  x = x.toUpperCase();
  console.log(x);
  let result = x.split("").reverse("").join("");
  return result === x;
}
console.log(pal("Racecar"));
