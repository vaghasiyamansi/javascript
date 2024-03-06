// javaScript try...catch Statement

{
// try{
//     // body of try 
// }
// catch(error){
//     // body of catch 
// }
}

// Display undeclared variable 
{
// try{
//     console.log(numerator/denominator);

//     // forgot to define variable a 
//     let a;
//     console.log(a);
//     console.log('Helloo');
// }
// catch(error){
//     console.log('An error Caught');
//     console.log('Error message:' + error);
// }
}

// JavaScript try...catch...finally Statement 

{
    // try{
    //     // try_statment 
    // }
    // catch(error){
    //     // catch_statements
    // }
    // finally{
    //     // code that gets executed anyway
    // }
}

// JavaScript throw Statement 

// The syntax of throw statement is 

{
    // throw expression;
}

{
    // const number = 5;
    // throw number/0;       generate an exception when divided by 0
}

// JavaScript throw with try...catch 

{
    // try {
    //     // body of try 
    //     throw exception;
    // }
    // catch(error){
    //     // body of catch 
    // }
}

// try...catch...throw Example 

{
    const number = 100;
    try {
        if(number > 50){
            console.log('Success');
        }
        else{
            // user-defined throw statement 
            throw new Error('The number is low');
        }
        console.log('hello');
    }
    catch(error){
        console.log('An error caught');
        console.log('Error message:' + error);
    }
}

