//  Q-1 countdown using a while loop

// {
//     let i;
//     i = 10;

//     while (i>0) {
//         document.write(i+"<br>");
//         i--;
//     }
// }

// Q-2 sum of number 1 to 10

// {
//     let i;
//     i = 1;
//     let sum = 0;

//     while (i<=10) {
//         document.write("number is:" + i + "<br>");
//         sum=sum+i;
//         i++;
//     }
//     document.write(sum+"<br>");
// }

// Q-3 multiplication using loop

// {
//     var t = 5;
//     var i = 1;

//     while (i<=10) {
//         document.write(t + "*" + i + "=" + i * t + "<br>");
//         i++;
//     }
// }

// Q-4 Guess the number game using a while loop


   const number = 3;
   let x = 0 , num = prompt("Guess the number game \n we give you a 10 chance : ");  
   while(x<9)
   {
       x++;
       if(num == number )
       {
           document.write( "<hr>" +"Right number is you win : " + number);
           break;
       }
           document.write(x + ". " +"your chosen number is : " + num + "<br>");
           num = prompt("Guess the number game \n we give you a 10 chance : ");  
   
}


// Q-5 fibonacci series

// {
//    var i = 0;
//    var j = 1;
//    var k;
//    var a=1
   
//    while (a<=30) {
//        document.write(i + "<br>");
//          k = i + j;
//          i = j;
//          j = k;
//          a++;
//    }
// }

// Q-6 factorial of a number

{
    var i = 1;
    var j = 1;
     while (i <= 10) {
        j = j*i;
        i++;
        document.write(j + "<br>");
     }
}

// Q-8 power of Number

// {
//       let power = 1;
//       let exponent = 4;
//       {
//          for(power=1; power<=10; power++)
//          {
//             result=power**exponent;
//             document.write(result + "<br>")
//          }
//       }
// }

//  Q-9 Print a pattern using a while loop

// {
//    let i;
//    let j;
//    for(i = 1; i <= 5; i++){
//       for(j = 1; j <= i; j++){
//          document.write("*");
//       }
//       document.write("<br>");
//    }
// }

// Q-10 a specific number using a for loop and break statement

// let x = 0 , num = prompt("enter Search number between 1 to 20 : "); 

    // while(x<=20){
    //     x++;
    //     if(x == num)
    //     {
            
    //         document.write("your number is :" + x + "<br>");
    //         break;
    //     }
    //     document.write(" your number is Search........" + x +"<br>");
    // }

// Q-11 first odd number in a sequence using a while loop and break
// statement

// {
//    let i = prompt("Enter a starting number value : " ) , num = prompt("enter a ending number value : " );  

//    while(i<=num)
//    {
//        i++;
//        if(1 == i%2)
//        {
//            document.write(" the first odd number is " + i );
//            break ;
//        }
//        // document.write(i);
//    }

// }

// Q-12 a number is prime using a for loop and break statement

// {
//    const number = parseInt(prompt("Enter a positive number: "));
//    let isPrime = true;

//    for (let i = 2; i < number; i++) {
//        if (number % i == 0) {
//            isPrime = false;
//            break;
//        }
// }

//    if (isPrime) {
//        document.write(`${number} is a prime number`);
//    } else {
//        document.write(`${number} is a not prime number`);
//    }

// }

// Q-13 Loop with a conditional break statement based on user input

// {
//    let i  , num = prompt("Enter only single digit number :");

//    let sum =num*10;

//    for(i=0;i<sum;i++)
//    {
//        if(num < 10)
//        {
//            num = prompt("enter only single digit number number " );
//            document.write("loop is continue " + num + "<br>");
//        }else
//        {
//            document.write( "<br>" + "loop is break you enter double digit number " + num);
//            break;
//        }
//    }
// }



// continue statement

//  Q-14 Skip printing odd numbers using a for loop and continue statement

// 
// {
//     let i;
//       for(i = 1; i <= 10; i++){
//         if(i % 2 !== 0){
//         continue;
//       }
//       document.write(i);
//    }
// }

// Q-15 skip multiples of 3 using a while loop and continue statement

   // let i = 1;

   // while (i <= 30){
   //    if (i % 3 === 0){
   //      i++;
   //      continue;
   //    }
   //    document.write(i + "<br>");
   //    i++;
   // }

// Q-16 print even number

// {
//    let i;
//    for(i = 1; i <= 20; i++){
//       if(i % 2 !== 0){
//          continue;
//       }
//       document.write(i);
//    }
// }

// Q-17 skip number divisable by 5 using a while loop and continue statement

// {
//    let i;
//      for(i = 0; i <= 50; i++){
//       if(i % 5 == 0){
//          continue;
//       }   
//          document.write(i + "<br>" );
//       }
     
// }





