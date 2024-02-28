// example - 1 Reverse number 

// {
//         let n = 123;
//         let rev = 0;
//         while (n != 0) {
//             rev = rev * 10 + n % 10;
//             n =parseInt(n/10);
//         }
//         console.log(rev);
// }



// example - 2  Write a JS function that returns a passed string with letters in alphabetical order. 

// let str = 'webmaster';
// let newstr = str.split('').sort().join('');
// console.log(newstr);

// function txt(str){
//     return str.split('').sort().join('');
// }
// console.log(txt('webmaster'));



// example - 3 Write a JS function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 

// function uppercase(str)
// {
//   let array = str.split(' ');
//   let newarray1 = [];
    
//   for(let i = 0; i<array.length; i++){
//       newarray1.push(array[i].charAt(0).toUpperCase()+array[i].slice(1));
//   }
//   return newarray1.join(' ');
// }
// console.log(uppercase("the quick brown fox"));



// example-4 Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.

// function longest(str){
//     str = str.split(" ")

//     return str.sort((a , b) => b.length - a.length)[0];
// }
// console.log(longest('Web Development Tutorial'));

{
    function longestword(string) {
        let words = string.split(' ');
        let longword = '';
        for (let x = 0; x < words.length; x++) {
            if (words[x].length > longword.length) {
                longword = words[x];
            }
        }
        return longword;
    }
    console.log(longestword('Webyurthrth Development Tutorial'));
}

// example - 5  JavaScript function that checks whether a number is perfect.

// let perfect = (a) =>{
//         let n = 0;
//         for(let i = 1; i < a; i++){
//             if(a % i == 0){
//                 n = n + i;
//                 console.log(i);
//             }
//         }
//         console.log(n);
//         if(a == n){
//             console.log("number is perfact");
//         }else{
//             console.log("number is not perfact");
//         }
//     }
//     (perfect(6));
//     (perfect(8129));


