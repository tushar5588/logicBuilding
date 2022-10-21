// const length = (string) => {
//   var a = 0;
//   while (string[a] !== undefined) {
//     a++;
//   }
//   return a;
// };
// const index = (collection, target) => {
//   var index;
//   for (i in collection) {
//     if (collection[i] === target) {
//       index = i;
//       return index;
//     }
//   }
// };
// const toLower = (char) => {
//   let value;
//   var case1 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   const ind = index(case1, char);
//   if (i > 25) {
//     value = case1[ind - 26];
//     return value;
//   } else {
//     value = case1[ind];
//     return value;
//   }
// };
// const include = (str1, str2) => {
//   const string = `${str1}s`;
//   const string2 = str2;
//   var b = 0;
//   var answer = false;
//   for (i = 0; i < length(string); i++) {
//     for (j = 0; j < length(string2); j++) {
//       if ((string2[j] === string[i]) & (j > b)) {
//         b++;
//         break;
//       } else {
//         if (b == length(string2) - 1) {
//           answer = true;
//           return answer;
//         } else {
//           answer = false;
//         }
//       }
//     }
//   }
//   return answer;
// };

// console.log(include("sdhelsd", "hel"));

// const arr = (str) => {
//   newArr = [];
//   for (i = 0; i < str.length; i++) {
//     newArr.push(str[i]);
//   }
//   return newArr;
// };

// const sort = (str) => {
//   var new1 = arr(str);
//   for (i = 0; i < new1.length; i++) {
//     for (j = 0; j < new1.length; j++) {
//       if (new1[i] < new1[j]) {
//         [new1[i], new1[j]] = [new1[j], new1[i]];
//       }
//     }
//   }
//   return new1;
// };

// const mostUsed = (str) => {
//   var old = sort(str);
//   var count = 1;
//   var number = "";
//   var newArr = [];
//   for (i = 0; i < old.length; i++) {
//     number = old[i];
//     if (old[i] === old[i + 1]) {
//       count++;
//     } else {
//       newArr.push({ alphabet: number, count: count });
//       count = 1;
//     }
//   }
//   return newArr;
// };
// console.log(mostUsed("hello"));

// const split = (str, str2) => {
//   str = str + str2;
//   var string = "";
//   var arr = [];
//   for (i = 0; i < str.length; i++) {
//     if (str[i] !== str2) {
//       string += str[i];
//     } else {
//       if (string.length) {
//         arr.push(string);
//       }
//       string = "";
//     }
//   }
//   return arr;
// };
// console.log(split("ds,dsd,sd", "s"));
