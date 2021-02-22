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

const object = {
    name: 'Feri',
    age: 12,
    height: 120,
    isMale: false,
    address: "6723 Szeged"
}

const grow = (obj) => {
    if (obj['age'] || obj.age) {
        obj.age++;
    }
    return obj;
}

const getOlder = (obj1, obj2) => {
    if (obj1.age && obj2.age) {
        if (obj1.age > obj2.age) {
            return obj1.name;
        } else if (obj1.age === obj2.age) {
            return 'Megegyezik az életkor';
        } else {
            return obj2.name;
        }

    } else {
        return 'Nem létezik age property.';
    }
}


// maxLength feladat
const maxLength = (arr) => {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length > max.length) {
            max = arr[i];
        }
    }
    return max;
};

console.log(maxLength(['a', 'abc', 'asdfds', 'abcicakuty']));

// firstString
const firstString = (arr) => {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].toLowerCase() < min.toLowerCase()) {
            min = arr[i];
        }
    }
    return min;
};

console.log(firstString(['Zsalma', 'barack', 'kukac']));

// addSub
const addSub = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            sum += arr[i];
        } else {
            sum -= arr[i];
        }
    }
    return sum;
};

console.log('Add', addSub([1, 2, 3, 4]));