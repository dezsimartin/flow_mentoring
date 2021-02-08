// Készítsünk függvényt (abs), ami egy számot vár paraméterül,
// és visszaadja a szám abszolút értékét!

const abs = (a) => {
    if (a >= 0) {
        return a;
    } else {
        return a * -1;
    }
};
//console.log('---------------------')
//console.log('Absolute  : ', abs(6));


//Készítsünk függvényt (signum), ami egy számot vár paraméterül. Visszatérési
//értéke -1, ha a szám negatív. 0, ha a szám 0, +1, ha a szám nagyobb, mint nulla.
const signum = (a) => {
    if (a < 0) {
        return -1;
    } else if (a === 0) {
        return 0;
    } else {
        return 1;
    }
};
//console.log('---------------------')
//console.log('Signum -  : ', signum(-10));
//console.log('Signum 0  : ', signum(0));
//console.log('Signum +  : ', signum(5));


//Készítsünk egy függvényt (pow), ami két számot vár paraméterül (a, b), és
//visszaadja az a^b (hatvány) értékét! Ne használjunk beépített függvényeket!

const pow = (a, b) => {
    const base = a;
    for (let i = 1; i < b; i++) {
        a *= base;
    }
    return a;
};
//console.log('---------------------')
//console.log('Power     : ', pow(2, 10));

//Készítsünk függvényt (fact), ami egy számot vár paraméterül, és visszaadja a
//szám faktoriálisát! Pl fact(5) = 5 * 4 * 3 * 2 * 1 = 120

const fact = (a) => {

        for (let i = a - 1; i > 0; i--) {
            a *= i;
        }
        return a;
    }
    //console.log('---------------------')
    //console.log('Factorial : ', fact(5));

// Készítsünk függvényt (isPrime), ami egy számot vár paraméterül, és visszatérési értéke logikai, aszerint, hogy a szám prím-e! 
//Elég egy lassabb prímtesztet végezni(pl elkezdjük 2 - től a számig maradékosan osztogatni a paramétert, és ha találunk osztót, akkor return false)
const isPrime = (num) => {
    for (let i = 2; i < num; i++)
        if (num % i === 0) return false;
    return num > 1;
}

// Extra megoldás
const isPrimeAdv = (num) => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
        if (num % i === 0) return false;
    return num > 1;
}

// Készítsünk függvényt(printPrimes), ami egy(n) számot vár paraméterül, és az első n prímet kiírja konzolra!(Igényesebb ha egymás mellé, vesszővel elválasztva)
const printPrimes = (n) => {
    let arr = [2];
    let i = 3;
    while (arr.length != n) {
        if (isPrime(i)) {
            arr.push(i);
        }
        i += 2;
    }
    console.log(arr);
}