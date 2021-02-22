const printArray = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (i === arr.length - 1) {
            process.stdout.write(arr[i].toString());
        } else {
            process.stdout.write(arr[i] + ', ');
        }
    }
    console.log();
};

const tomb = ['Mate', 'szereti', 'a', 'cicakat'];
printArray(tomb);
console.log(tomb);

const powerOfTwo = (arr, n) => {
    let num = 2;
    for (let i = 0; i < n; i++) {
        arr.push(num);
        num *= 2;
    }
    return arr;
};

const ures_tomb = [];

console.log(powerOfTwo(ures_tomb, 4));