// example-1 
// add('10' , '5');
// function add(a,b){
//     console.log(a + b);
// }


// example-2 no argument with return
// function add(a,b,t){
//     t = a+b;
//     return t;
// }
// console.log(add(10,20));


// example-3 anonymous function
// let rev = function(n){
//     let rev = 0;
//     while(n != 0){
//         rev = rev * 10 + n % 10;
//         n = parseInt(n/10);
//     }
//     return rev;
// }
// console.log(rev(12345));  //54321


// example-4 fibonaci series
// let x = (function fib(n)
// {
//     if(n == 0)
//     {
//         return 0;
//     }
//     else if(n == 1){
//         return 1;
//     }
//     else{
//         return fib(n-1) + fib(n-2);
//     }
// })(10);
// let n;
// for(i =1; i < n; i++){
//     console.log(fib(i));
// }


// example-5 arrow function
 // let perfect = (a) =>{
//     let n = 0;
//     for(let i = 1; i < a; i++){
//         if(a % i == 0){
//             n = n + i;
//             console.log(i);
//         }
//     }
//     console.log(n);
//     if(a == n){
//         console.log("number is perfact" + n);
//     }else{
//         console.log("number is not perfact" + n);
//     }
// }
// console.log(perfect(496));
// console.log(perfect(8129));


// example - 6
// let newfun = (n) =>{
//     console.log("winding phase :" + n);
//     if(n < 3){
//         newfun(++n);
//     }
//     console.log("unwinding phase:" + n);
// }
// console.log((newfun(1)));


// example - 7 number of square
// const square = function (number) {
//     return number * number;
//   };
  
//   console.log(square(5)); 


// example - 8 number factorial
// function factorial(n) {
//     if (n === 0 || n === 1) {
//       return 1;
//     } else {
//       return n * factorial(n - 1);
//     }
//   }
//   console.log(factorial(3));


// example - 9 multiplication and addition
// function addSqr(a, b) {
//     function square(x) {
//       return x * x;
//     }
//     return square(a) + square(b);
//   }
  
//   console.log(addSqr(2, 3)); // 13
//   console.log(addSqr(3, 4)); // 25
//   console.log(addSqr(4, 5)); // 41


// example-10
// let fact = (n) =>
// {
//     if(n == 1)
//     {
//         return 1;
//     }
//     else
//     return n * fact(n-1);
// }
// let x = fact(3);
// console.log("factorial is:" + x);


// example-11 1 4 12 32 80....
// function Mult(x) {
//     for (let i = 1; i <= 10; i++) {
//         console.log(i * x);
//         x = x * 2;
//     }
// }
// console.log(Mult(1));


// example-12
// (function(salary) {
//     let hra, da, gross;
    
//     if (salary <= 5000) {
//         hra = salary * 0.08;
//         da = salary * 0.20;
//     } else if (salary <= 10000) {
//         hra = salary * 0.12;
//         da = salary * 0.30;
//     } else if (salary < 15000) {
//         hra = salary * 0.15;
//         da = salary * 0.40;
//     } else {
//         hra = salary * 0.20;
//         da = salary * 0.50;
//     }
    
//     gross = salary + hra + da;
//     console.log("Gross salary is: " + gross);
// })(15000);


// example-13
// let product = function(t){
//     for(let i = 0.5; i <= 10; i++)
//     {
//         console.log(i++);
//         console.log(t++);
//         t+=3;
//     }
// }
// console.log(product(1));


// example-14 
// let num = (a)=>{
//     if(a > 0){
//         console.log("It is positive number");
//     }
//     else{
//         console.log("It is negative number");
//     }
// }
// console.log(num(10));
// console.log(num(-100));


// example-15
// (function() {
//     let a = 30, b = 20, c = 45, d = 40, total, per;
//     total = a + b + c + d;
//     per = total / 4;
//     console.log("Total marks is : " + total);
//     console.log("Percentage is : " + per);

//     if (per >= 95) {
//         console.log("A grade");
//     }
//     else if (per < 95 && per >= 70) {
//         console.log("B grade");
//     }
//     else if (per < 70 && per >= 45) {
//         console.log("C grade");
//     }
//     else if (per < 45 && per >= 35) {
//         console.log("D grade");
//     }
//     else if (per < 35) {
//         console.log("E grade");
//     }
// })();


// example-16
// function compare(a, b) {
//     if (a > b) {
//         return 0;
//     } else if (a < b) {
//         return 1;
//     }
//     return 0;
// }
// console.log(compare(20,30));
// console.log(compare(20,10));


// example-17
let cube = function (number) {
    return number * number*number;
  };  
  console.log(cube(10));









  



