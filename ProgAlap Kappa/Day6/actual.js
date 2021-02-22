//1, Írj egy függvényt, amely egy számokat tartalmazó tömböt és egy számot(s) 
//vár paraméteréül.Amennyiben a tömbben két egymást követő szám eredménye a 
//paraméterül kapott szám(s), a második számot "töröljük"
const fgv = (arr, s) => {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] + arr[i + 1] === s) {
                arr.splice(i + 1, 1);
                i--;
            }
        }
        return arr;
    }
    // console.log(fgv([1, 2, 3, 4, 5, 2], 7));


//2, Írj egy függvényt, amely egy 4 szóból álló stringet vár paraméterül.A 
// visszadott értékben minden mássalhangzónak nagy betűnek kell lennie, 
//minden magánhangzónak * -nak és minden szó végére kerüljön 4 db!!!!.

const swap = (str) => {
    return str.toUpperCase().replace(/[AÁEOÓÖUÜI]/g, '*')
        .split(' ').map(el => el + '!!!!').join(' ');
}

//Robi sol.
const consonantChanger = (str) => {
    let newString = str.replace(/a/g, "*").replace(/e/g, "*").replace(/i/g, "*").replace(/o/g, "*").replace(/u/g, "*");
    newString = newString.toLocaleUpperCase();
    newString = newString.replace(/ /g, "!!!!");
    newString = newString + '!!!!';

    return newString;
};

console.log(swap('alma körte cica ecet megilyesmik'));

// 3, Írj egy függvényt, amely egy számokat tartalmazó tömböt vár paraméterül
//(sorrendben).A feladat, hogy a visszaadott tömbben a számok között ne legyen 
//lyuk, tehát minden elem 1 - el legyen kisebb, mint az előző.A legnagyobb 
//kapott elemig írja ki.Pl.: param: [1, 5, 9] output: [1, 2, 3, 4, 5, 6, 7, 8, 9]


//Megbeszéltük


// 4.Írj egy függvényt, amely egy tömböt vár paraméterül (lásd lent). Vizsgáljuk meg,
//majd keressük meg a legidősebb embert a tömbünkben, és írjuk is ki az adatait.
// let ppl = [{ name: 'Máté', age: 26, isMale: true }, 
// { name: 'Feri', age: 33, isMale: true }, { name: 'Viki', age: 23, isMale: false },
//{ name : 'Dani', age: 22, isMale: true }]

const oldestMan = (arr) => {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (max.age < arr[i].age) {
            max = arr[i];
        }
    }
    return max;
}

let ppl = [{ name: 'Máté', age: 26, isMale: true },
    { name: 'Feri', age: 33, isMale: true },
    { name: 'Viki', age: 23, isMale: false },
    { name: 'Dani', age: 22, isMale: true }
];

console.log(oldestMan(ppl));

// 
//5. Írj egy függvényt, amely egy tömböt vár paraméterül(lsd lent).Keressük meg, 
//hány darab piros teslaszerepel a tömbbünkben, majd írjuk ki az eredményt.
//let cars = [{ type: 'Tesla', year: 2008, model: 'S', color: 'red' }, 
//{ type: 'Lada', year: 1988, model: 'Niva', color: 'red' }, { type: 'Ford', 
//year: 2002, model: 'Escort', color: 'blue' }, { type: 'Tesla', year: 2018, 
//model: 'X', color: 'red'}, { type: 'Tesla', year: 2012, model: 'Y', color: 'blue' }]

const lookForRedTeslas = (cars) => {
    let counter = 0;
    for (car of cars) {
        if (car.type === 'Tesla' && car.color === 'red') {
            counter++;
        }
    }
    return counter;
}

let cars = [{ type: 'Tesla', year: 2008, model: 'S', color: 'red' },
    { type: 'Lada', year: 1988, model: 'Niva', color: 'red' }, {
        type: 'Ford',
        year: 2002,
        model: 'Escort',
        color: 'blue'
    },
    {
        type: 'Tesla',
        year: 2018,
        model: 'X',
        color: 'red'
    }, { type: 'Tesla', year: 2012, model: 'Y', color: 'blue' }
]

console.log(lookForRedTeslas(cars));

//6. Írj egy függvényt, amely kiíratja a spaceX api által biztosított tömbből 
//az összes links -> patch -> small image url - t és a cores - ból a core - ok 
//string id - ját.Letöltendő: https://api.spacexdata.com/v4/launches