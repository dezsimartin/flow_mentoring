// //DAY 1

// //1.
// const trabant = 100; // km/h
// const bmw = 2 * trabant; // 2x olyan gyors
// const lada = trabant + 40; // 40-el gyorsabb
// console.log('Trabant:', trabant, 'km/h');
// console.log('BMW:', bmw, 'km/h');
// console.log('Lada:', lada, 'km/h');
// const osszeg = trabant + bmw + lada;
// console.log('Összesen:', osszeg, 'km/h');
// console.log('Összes 2 :', trabant + bmw + lada, 'km/h');

// console.log('\n')
//     //2. 
// const cat = 4;
// const human = cat - 3;
// const spider = 125 * cat;
// console.log('Macska', cat, 'db');
// console.log('Ember', human, 'db');
// console.log('Pók', spider, 'db');
// console.log('Összesen:', cat + human + spider, 'db');

// console.log('\n')
//     //3. 
// const feri = 12;
// const geza = feri - 5;
// const mate = Math.round(Math.random() * 10) + 10;
// const max = 20; // (adott ember pontjai / max) * 100
// console.log('Feri', feri, 'pont', Math.round((feri / max) * 100), '%');
// console.log('Géza', geza, 'pont', Math.round((geza / max) * 100), '%');
// console.log('Máté', mate, 'pont', Math.round((mate / max) * 100), '%');

// console.log('\n')
//     //4.
// const cat = 4;
// const spider = cat * 2;
// const chicken = cat / 2;
// const centipede = Math.floor(Math.random() * 31) + 20; // 20 - 50
// console.log('Cat', cat);
// console.log('Chicken', chicken);
// console.log('Centipede', centipede);
// const sum = cat + chicken + centipede;
// console.log('Sum:', sum);

// console.log('\n')
//     //5
// const aliz = 18;
// const boborjan = aliz + 2;
// const csilla = aliz - 5;
// const sumAge = aliz + boborjan + csilla;
// console.log('Alíz', aliz)
// console.log('Boborján', boborjan);
// console.log('Csilla', csilla);
// console.log('Koraik összege: ', sumAge);

// console.log('\n')
//     //6
// const alma = 30;
// const banan = alma * 2;
// const citrom = alma * 3;
// console.log('Alma: ', alma);
// console.log('Banán: ', banan);
// console.log('Citrom: ', citrom);
// console.log('Összesen (kg): ', (alma + banan + citrom) / 100);


// console.log('\n')
//     //7
// const celsius = 5;
// const kelvin = celsius + 273;
// const fahrenheit = celsius * 18 / 10 + 32;
// console.log('Celsius:', celsius);
// console.log('Kelvin:', kelvin);
// console.log('Fahrenheit: ', fahrenheit);

//ProgAlap Gyak.extra feladatok

// 1. feladat
// Feri, Máté és Andor hárman testvérek.Feri 32 éves, Máté 4 évvel fiatalabb, Andor pedig fele annyi idős mint Máté és Feri összesen.
// // Készítsetek programot, amely kiíratja a nevüket és korukat, de csak akkor ha 3 testvér korának összege páros szám.Ha nem páros, akkor írja ki az életkoruk összegét.

// const feri = 32;
// const mate = feri - 4;
// const andor = Math.floor((feri + mate) / 2);
// const sum = feri + mate + andor;
// if (sum % 2 === 0) {
// console.log('Feri: ', feri);
// console.log('Máté: ', mate);
// console.log('Andor: ', andor);
// } else {
// console.log('Összesen: ', sum);
// }

// 2. feladat
// Adjunk értéket az(a) nevű változónak, amely egy random szám 0 és 30 között..Készítsünk programot,
// amely a kapott
// érték alapján megvizsgálja a változónkat, és kiíratja, hogyha a szám kisebb / egyenlő mint 10,
// 10 és 20 között szerepel, vagy nagyobb / egyenlő mint 20.
// const a = Math.round(Math.random() * 30);
// if (a <= 10) {
//     console.log('A szám kisebb/egyenlő, mint 10.');
// } else if (a < 20) {
//     console.log('A szám 10 és 20 között van.');
// } else {
//     console.log('A szám nagyobb/egyenlő, mint 20.');
// }

// 3.feladat
// Generáljunk 3 random számot 0 és 50 között(a, b, c), majd vizsgáljuk meg, hogy a számok összege nagyobb
// vagy egyenlő mint 90. Amennyiben nagyobb / egyenlő, írjuk ki a 3 szám közül a legnagyobbat,
// amennyiben kisebb írjuk ki a legkisebbet.
// const a = Math.round(Math.random() * 50);
// const b = Math.round(Math.random() * 50);
// const c = Math.round(Math.random() * 50);
// const sum = a + b + c;
// if (sum >= 90) {
// console.log(Math.max(a, b, c));
// } else {
// console.log(Math.min(a, b, c));
// }

//4.feladat
// Generáljunk 1 random számot 0 és 30 között(a), majd vizsgáljuk meg, hogy a szám kisebb / egyenlő - e mint 13.
// Amennyiben igen, írassuk ki a különbségüket, ha nem, akkor pedig a számból vegyünk el 13 - at, majd szorozzuk
// meg 2 - vel.