// // replaceDigits

// const replaceDigits = (str) => {
//     let out = '';
//     for (const ch of str) {
//         switch (ch) {
//             case '1':
//                 out += 'One';
//                 break;
//             case '2':
//                 out += 'Two';
//                 break;
//             case '3':
//                 out += 'Three';
//                 break;
//             default:
//                 out += ch;
//         }
//     }
//     return out;
// };

// const replaceDigits = (str) => {
//     return str.replace(/1/g, 'One').replace(/2/g, 'Two').replace(/3/g, 'Three');
// };

// const replaceDigits = (str) => {
//     let res = str.replace(/1/g, 'One');
//     res = res.replace(/2/g, 'Two');
//     res = res.replace(/3/g, 'Three');
//     return res;
// };

// console.log('REPLACE', replaceDigits('abc123'));

// // createStr

// const createStr = (size) => {
//     return 'abcdefghijklmnopqrstuvwxyz'.substring(0, size);
// };

// console.log('ABC', createStr(26));

// const toNumbers = (str) => {
//     let out = '';
//     for (const ch of str) {
//         if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')) {
//             out += ch.charCodeAt(0) + ' ';
//         } else {
//             out += ch + ' ';
//         }
//     }
//     return out;
// };

// console.log(toNumbers('abc123ABC'));

const compareNum = (a, b) => {
    return a - b;
}

const highest = (arr) => {
    return arr.sort((a, b) => a - b)[arr.length - 1];
}

console.log(highest([1, 6, 30, 78, 2, 5]));