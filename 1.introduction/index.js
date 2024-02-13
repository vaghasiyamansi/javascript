{
    var number1 = 20;
    var Total = number1 + number2;
    var number2 = 20;
    console.log(number2);
    var number2 = 40;
   console.log(Total)
}


{
   var newelement = document.createElement("h1");
   newelement.textContent="hello world";
   document.body.appendChild(newelement);
   
   var newelement=document.createElement("marquee" , Option);
   newelement.textContent="hello world";
   document.body.appendChild(newelement);
   
   var newelement=document.createElement("pre");
   newelement.textContent="how are you!";
   document.body.appendChild(newelement);
}


//  Template Literals

var _nameone = 20 - 20 - '5';
var _nametwo= '5';
console.log(_nameone);
console.log(typeof(_nameone));



var one = 20
var two = 40

   var three = "one 'two'"
   console.log(three);

   var four  = 'one "two"'
   console.log(four);

   var five = `''one' "two"`
   console.log(five);

   var six = `${one} + ${two}`
   console.log(six);


//  Rules for Naming JavaScript Variables

{
   valid
   let a = 'hello';
   let _a = 'hello';
   let $a = 'hello';
}
// {
   invalid
//     var a1 = 'hello';  this gives an error
// }




