// class 

// class person {
//     constructor (name){
//         this.name = name;
//     }
//     display = function (){
//         return "hello" + this.name;
//     }
// };

// let obj = new person('john');

// console.log(obj);
// console.log(obj.name);
// console.log(obj.display);
// console.log(obj.display());

// call method

// let person = {
//     print : function(city){
//         return this.name + " " + this.surname + "\n" + city;
//     }
// };

// let viru = {
//     name: "virat",
//     surname:"kohli"
// }
// console.log(person.print.call(viru , "surat"));

// apply method 

// let person = {
//     print : function(city){
//         return this.name + " " + this.surname + " is visit in " + city;
//     }
// }

// let viru = {
//     name: "virat",
//     surname:"kohli"
// }

// console.log(person.print.apply(viru,['Surat']));


// bind method 

let person = {
    name : "rohit",
    surname : "sharma",
    print: function(){
        return this.name + " " + this.surname;
    }
};

let viru = {
    name:"virat",
    surname : "kohli"
}

console.log(person.print());
console.log(person.print.bind(viru)());