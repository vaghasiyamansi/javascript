// JavaScript Number Methods

/*
toString()	      Returns a number as a string
toExponential()	  Returns a number written in exponential notation
toFixed()	        Returns a number written with a number of decimals
toPrecision()	    Returns a number written with a specified length
ValueOf()	        Returns a number as a number
*/


/* toString() */

// let number = 155
// console.log(number);
// console.log(typeof(number));

// let number1 = number.toString();
// console.log(number1);
// console.log(typeof(number1));

// let number2  = (155+89).toString();
// console.log(number2);
// console.log(typeof(number2));

// let number3  = (155.25).toString();
// console.log(number3);
// console.log(typeof(number3));


/*  toExponential() */

// toExponential() returns a string, with a number rounded and written using exponential notation.

// let Enumber = 15550000;
// console.log(Enumber);

// let Enumber1  = Enumber.toExponential();
// console.log(Enumber1);

// let Enumber2  = Enumber.toExponential(4);
// console.log(Enumber2);


/*  toFixed() */

// let Fnumber  = 1255.2355
// console.log(Fnumber);

// let Fnumber1  = Fnumber.toFixed();
// console.log(Fnumber1);
// console.log(typeof(Fnumber1));

// let Fnumber2  = Fnumber.toFixed(5);
// let Fnumber3  = Number(Fnumber2);
// console.log(Fnumber2);
// console.log(typeof(Fnumber2));
// console.log(Fnumber3);
// console.log(typeof(Fnumber3));


/* toPrecision()pre */

// let Pnumber = 1.56589
// console.log(Pnumber);

// let Pnumber1  = Pnumber.toPrecision(3);
// console.log(Pnumber1);
// console.log(typeof(Pnumber1));


/* ValueOf() */

let Vnumber  = 156465
console.log(Vnumber);

let Vnumber1 = Vnumber.valueOf();
console.log(Vnumber1);

let Vnumber2 = (12-5).valueOf();
console.log(Vnumber2);

let Vnumber3 = (12).valueOf();
console.log(Vnumber3);