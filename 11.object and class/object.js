// object & class:-

let person = {
    firstname : "John",
    lastname : "Peter",
    email : "john@test.in",
};

// console.log(person);

// dot notation:-
// console.log(person.firstname);

// ["key"]:-
// console.log(person["lastname"]);
// console.log(person["email"]);

// let a = "firstname";
// console.log(person[a]);
// let b = "lastname"
// console.log(person[b]);


// Add property:-
person.gender = "male";
person.address = {
    line : "208,city center",
    city : "surat",
    state : "gujarat"
}
// console.log(person['address']['city']);
person.hobbies = ['reading','music','traveling','playing'];
// let a = "hobbies";
// console.log(person[a][2]);
// console.log(person);
console.log(person['hobbies']['0']);

// console.log(person.email);
// console.log(person.hobbies[2]);
// console.log(person.address);
// console.log(person.address.state);

// delete property:-
// delete person.gender;
// console.log(person);