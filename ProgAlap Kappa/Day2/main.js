//1.feladat
// Készítsünk függvényt (abs), ami egy számot vár paraméterül,
// és visszaadja a szám abszolút értékét!

// const abs = (a) => {
//     if (a >= 0) {
//         return a;
//     } else {
//         return a * -1;
//     }
// };
//console.log('---------------------')
//console.log('Absolute  : ', abs(6));

//2. feladat
//Készítsünk függvényt (signum), ami egy számot vár paraméterül. Visszatérési
//értéke -1, ha a szám negatív. 0, ha a szám 0, +1, ha a szám nagyobb, mint nulla.
// const signum = (a) => {
//     if (a < 0) {
//         return -1;
//     } else if (a === 0) {
//         return 0;
//     } else {
//         return 1;
//     }
// };
//console.log('---------------------')
//console.log('Signum -  : ', signum(-10));
//console.log('Signum 0  : ', signum(0));
//console.log('Signum +  : ', signum(5));

//3. feladat
//Készítsünk egy függvényt (pow), ami két számot vár paraméterül (a, b), és
//visszaadja az a^b (hatvány) értékét! Ne használjunk beépített függvényeket!

// const pow = (a, b) => {
//     let eredmeny = 1;
//     for (let i = 0; i < b; i++) {
//         eredmeny *= a;
//     }
//     return eredmeny;
// }
// console.log(pow(3, 2));

// const pow = (a, b) => {
//     return a ** b;
// }
// console.log(pow(3, 2));

// 4. feladat
//Készítsünk függvényt (fact), ami egy számot vár paraméterül, és visszaadja a
//szám faktoriálisát! Pl fact(5) = 5 * 4 * 3 * 2 * 1 = 120

// const fact = (a) => {

//         for (let i = a - 1; i > 0; i--) {
//             a *= i;
//         }
//         return a;
//     }
//console.log('---------------------')
//console.log('Factorial : ', fact(5));

// function factorialize(num) {
//     if (num < 0)
//         return -1;
//     else if (num == 0)
//         return 1;
//     else {
//         return (num * factorialize(num - 1));
//     }
// }
// factorialize(5);

// const fact = (a) => {
//     let eredmeny = 1;
//     for (let i = 0; i < a; i++) {
//         eredmeny *= (a - i);
//     }
//     return eredmeny;
// }


//5. feladat
//Írj egy függvényt (allEven), ami egy pozitív egész számot vár. Írasd ki az
//összes páros számot a kapott számig. A 0 ne legyen benne!
// const allEven = (a) => {

//         for (let i = 1; i <= a; i++) {
//             if (i % 2 === 0) {
//                 console.log(i);
//             }
//         }
//     }
//     //console.log('---------------------')
//     //console.log('allEven:')
// allEven(21);

// 6. feladat
//Írj egy függvényt (addAll), ami egy pozitív egész számot vár. Add össze
//az összes egész számot 1-től a kapott számig. Az eredményt írasd ki.

// const addAll = (a) => {
//     5
//     let base = 0; // i  <= 5
//     for (let i = 1; i <= 3; i++) {
//         base += i; // base = base + i   
//         // 1. iteráció 1
//         // 2. iteráció 3

//     }
//     return base;
// }

//console.log('---------------------')
//console.log('addAll    : ', addAll(21));

/*
Készíts olyan ciklust, ami a következő kimenetet produkálja (minden sor,
külön ciklus eredménye):
a 10 100 200 300 400 500 600 700 800 900 1000
b 1 2 4 8 16 32 64 128
c 0 2 4 6 8 10
d 3 6 9 12 15
e 9 8 7 6 5 4 3 2 1 0
f 1 1 1 2 2 2 3 3 3 4 4 4
g 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4
*/


const cicles = () => {

        for (let i = 1; i <= 1000; i += 100) {
            if (i === 1) {
                //console.log('10');
                //console.log('100');
                i = 100;
            } else {
                //console.log(i);
            }
        }

        //console.log('---------------------')

        for (let i = 1; i <= 128; i *= 2) {
            if (i === 1) {
                //console.log(1); 
                i += 1;
                //console.log(i);
            } else {
                //console.log(i);
            }
        }

        //console.log('---------------------')

        for (let i = 0; i <= 10; i += 2) {
            //console.log(i);
        }

        //console.log('---------------------')

        for (let i = 3; i <= 15; i += 3) {
            //console.log(i);
        }

        //console.log('---------------------')

        for (let i = 9; i >= 0; i--) {
            //console.log(i);
        }

        //console.log('---------------------')


        let kiirandoSzam = 1;
        for (let i = 1; kiirandoSzam <= 4; i++) {
            if (i % 3 === 0) {
                //console.log(kiirandoSzam); 
                kiirandoSzam += 1;
            } else {
                //console.log(kiirandoSzam);
            }
        }

        //console.log('---------------------')

        let kiirandoSzam2 = 0;
        for (let i = 1; i <= 15; i++) {
            if (i % 4 === 0) {
                //kiirandoSzam2 += 1;
                //console.log(kiirandoSzam2); 
                kiirandoSzam2 = 0;
            } else {
                //console.log(kiirandoSzam2);
                kiirandoSzam2 += 1;
            }
        }


    }
    //console.log('---------------------')
    //console.log('cicles    : ');
cicles();

// 8. feladat
// Készíts egy függvényt(percentage), amely két számot várparaméterül(a illetve b).Az első 
// paraméter egy szám, a 
// másodikparaméter egy százalékos érték.A függvény térjen vissza a számszázalékos értékével.
// const percentage = (num, per) => {
//     return (num / 100) * per;
// }

//console.log(percentage(35, 50));


const digitsCount = (n) => {
    let count = 0;
    if (n >= 1) ++count;

    while (n / 10 >= 1) {
        n /= 10;
        ++count;
    }

    return count;
}

//console.log(digitsCount(3222));

//10. feladat
// Készítsünk egy függvényt(pythagoreanTheorem), amely két számot várparaméterül(a és b), 
// és értékül visszaadja Pitagorasz - tétele alapján azátfogó értékét.
// const pythagorean = (sideA, sideB) => {
//     return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
// }

// const pyth2 = (sideA, sideB) => {
//     return sqrt((sideA * sideA) + (sideB * sideB))
// }

// const sqrt = (a) => {
//     let x,
//         x1 = a / 2;

//     do {
//         x = x1;
//         x1 = (x + (a / x)) / 2;
//     } while (x !== x1);
//     return x;
// }

//console.log(pythagorean(4, 3));
//console.log(pyth2(4,3));

//12. feladat
// Készítsünk függvényt (isPrime), ami egy számot vár paraméterül, és visszatérési értéke logikai, aszerint, hogy a szám prím-e! 
//Elég egy lassabb prímtesztet végezni(pl elkezdjük 2 - től a számig maradékosan osztogatni a paramétert, és ha találunk osztót, akkor return false)
// const isPrime = (num) => {
//     for (let i = 2; i < num; i++)
//         if (num % i === 0) return false;
//     return num > 1;
// }

// Extra megoldás
// const isPrimeAdv = (num) => {
//     for (let i = 2, s = Math.sqrt(num); i <= s; i++)
//         if (num % i === 0) return false;
//     return num > 1;
// }

// 13. feladat
// Készítsünk függvényt(printPrimes), ami egy(n) számot vár paraméterül, és az első n prímet kiírja konzolra!(Igényesebb ha egymás mellé, vesszővel elválasztva)
// const printPrimes = (n) => {
//     let arr = [2];
//     let i = 3;
//     while (arr.length != n) {
//         if (isPrime(i)) {
//             arr.push(i);
//         }
//         i += 2;
//     }
//     console.log(arr);
// }