//DAY 1

//1.
const trabant = 100; // km/h
const bmw = 2 * trabant; // 2x olyan gyors
const lada = trabant + 40; // 40-el gyorsabb
console.log('Trabant:', trabant, 'km/h');
console.log('BMW:', bmw, 'km/h');
console.log('Lada:', lada, 'km/h');
const osszeg = trabant + bmw + lada;
console.log('Összesen:', osszeg, 'km/h');
console.log('Összes 2 :', trabant + bmw + lada, 'km/h');

console.log('\n')
    //2. 
const cat = 4;
const human = cat - 3;
const spider = 125 * cat;
console.log('Macska', cat, 'db');
console.log('Ember', human, 'db');
console.log('Pók', spider, 'db');
console.log('Összesen:', cat + human + spider, 'db');

console.log('\n')
    //3. 
const feri = 12;
const geza = feri - 5;
const mate = Math.round(Math.random() * 10) + 10;
const max = 20; // (adott ember pontjai / max) * 100
console.log('Feri', feri, 'pont', Math.round((feri / max) * 100), '%');
console.log('Géza', geza, 'pont', Math.round((geza / max) * 100), '%');
console.log('Máté', mate, 'pont', Math.round((mate / max) * 100), '%');

console.log('\n')
    //4.
const chicken = cat / 2;
const centipede = Math.round(Math.random() * 31) + 20; // 20 - 50
console.log('Cat', cat);
console.log('Chicken', chicken);
console.log('Centipede', centipede);
const sum = cat + chicken + centipede;
console.log('Sum:', sum);

console.log('\n')
    //5
const aliz = 18;
const boborjan = aliz + 2;
const csilla = aliz - 5;
const sumAge = aliz + boborjan + csilla;
console.log('Alíz', aliz)
console.log('Boborján', boborjan);
console.log('Csilla', csilla);
console.log('Koraik összege: ', sumAge);

console.log('\n')
    //6
const alma = 30;
const banan = alma * 2;
const citrom = alma * 3;
console.log('Alma: ', alma);
console.log('Banán: ', banan);
console.log('Citrom: ', citrom);
console.log('Összesen (kg): ', (alma + banan + citrom) / 100);


console.log('\n')
    //7
const celsius = 5;
const kelvin = celsius + 273;
const fahrenheit = celsius * 18 / 10 + 32;
console.log('Celsius:', celsius);
console.log('Kelvin:', kelvin);
console.log('Fahrenheit: ', fahrenheit);