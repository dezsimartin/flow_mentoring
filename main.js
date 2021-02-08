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
  
  const fact = (a) =>{
  
    for (let i = a-1; i>0 ; i--){
        a *= i; 
    }
    return a;
  }
  //console.log('---------------------')
  console.log('Factorial : ', fact(5));
  
  //Írj egy függvényt (allEven), ami egy pozitív egész számot vár. Írasd ki az
  //összes páros számot a kapott számig. A 0 ne legyen benne!
  
  const allEven = (a) =>{
    
    for (let i = 1; i<=a ; i++){
        if (i%2 === 0){
          console.log(i);
        } 
    }
  }
  //console.log('---------------------')
  //console.log('allEven:')
  allEven(21);
  
  
  //Írj egy függvényt (addAll), ami egy pozitív egész számot vár. Add össze
  //az összes egész számot 1-től a kapott számig. Az eredményt írasd ki.
  
  const addAll = (a) =>{  5
    let base = 0;   // i  <= 5
    for (let i = 1; i<=3 ; i++){
          base += i; // base = base + i   
          // 1. iteráció 1
          // 2. iteráció 3
          
        }
        return base; 
    }
  
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
  
    for (let i = 1; i <= 1000 ; i += 100){
      if (i === 1){
        //console.log('10');
        //console.log('100');
        i = 100;    
      } else {
        //console.log(i);
      }
    }
  
    //console.log('---------------------')
  
    for (let i = 1; i<=128 ; i*=2){
      if (i === 1){
        //console.log(1); 
        i += 1;
        //console.log(i);
      } else {
        //console.log(i);
      }
    }
  
    //console.log('---------------------')
  
    for (let i = 0; i<=10 ; i+=2){
        //console.log(i);
    }
  
    //console.log('---------------------')
  
    for (let i = 3; i<=15 ; i+=3){
        //console.log(i);
    }
  
    //console.log('---------------------')
  
    for (let i = 9; i>=0 ; i--){
        //console.log(i);
    }
  
    //console.log('---------------------')
  
  
    let kiirandoSzam = 1;
    for (let i = 1; kiirandoSzam<=4 ; i++){
      if (i % 3 === 0){
        //console.log(kiirandoSzam); 
        kiirandoSzam += 1;
      } else {
        //console.log(kiirandoSzam);
      }
    }
  
    //console.log('---------------------')
  
    let kiirandoSzam2 = 0;
    for (let i = 1; i<=15 ; i++){
      if (i % 4 === 0){
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


const  percentage = (num, per) =>
{
  return (num/100)*per;
}
          
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

  const pythagorean = (sideA, sideB) =>{
    return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
  }

  const pyth2 = (sideA, sideB) => {
      return sqrt((sideA * sideA) + (sideB * sideB))
  }

  const sqrt = (a) => {
    let x,
        x1 = a / 2;
        
    do {
        x = x1;
        x1 = (x + (a / x)) / 2;
    } while (x !== x1);
    return x;
}
  
  //console.log(pythagorean(4, 3));
  //console.log(pyth2(4,3));

const sum3and5Multiplies = () => {
    let sum = 0;
    for (let x = 0; x < 1000; x++)
    {
        if (x % 3 === 0 || x % 5 === 0)
        {
           sum += x;
        }
    }
    return sum;
}


//console.log(sum3and5Multiplies());

const flowAcademy = () => {
    for ( let i = 1; i <= 100; i++ )
{
  if ( i%3 === 0 && i%5 === 0 )
  {
    //console.log( i + " FlowAcademy" );
  }
  else if ( i%3 === 0 ) 
  {
    //console.log(i+ " Flow" );
  }
  else if ( i%5 === 0 ) 
  {
    //console.log(i+ " Academy" );
  }
  else
  {
    //console.log(i);
  }
}

}

flowAcademy();


const armstrongNumbers = () =>
{
 for (let i = 1; i < 10; ++i) 
 {
   for (let j = 0; j < 10; ++j) 
     {
        for (let k = 0; k < 10; ++k)
        {
          let pow = (Math.pow(i,3) + Math.pow(j,3) + Math.pow(k,3));
          let plus = (i * 100 + j * 10 +  k);
          if (pow == plus) 
           {     
             //console.log(pow);
            }
         }
       }
    }
  }

  armstrongNumbers();

/* function happyNumHelper(num) 
{
    let m, n ;
    let c = [] ;
 
    while(num != 1 && c[num] !== true) 
    {
        c[num] = true ;
        m = 0 ;
        while (num > 0) {
            n = num % 10 ;
            m += n * n ;
            num = (num  - n) / 10 ;
        }
        num = m ;
    }
    return (num == 1) ;
}

function happyNumber() {
    let counter = 5;
    let num = 1;
    let f5 = ''; 
    while(counter-- > 0) 
    {
        while(!happyNumHelper(num))
            num++ ;
            f5 = f5+(num + ", ") ;
    
        num++ ;
    }
    //console.log('Az első 5 boldog szám : '+f5);

}

happyNumber(); */
 

