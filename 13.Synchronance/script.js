// Javascript async/await

// async function fun_name(parameter1, parameter2, ...parameterN){
    // statement 
// }

// fun_name - name o the function 
// parameter - parameters that are passed to the function 
  
// Async 

// the async keyword is used before the function to represent that the function is asynchronous.

// async function example 

//     async function f(){
//         console.log('Async function.');
    
//         return Promise.resolve(1);
    

    // f().then((data)=> console.log(data));
// }


// this function returns a Promise, you can use the chaining method then()
{
async function f() {
    console.log('Async function.');
    return Promise.resolve("SkillQode");
    
}

f().then(function(result){
    console.log(result);
});
}
