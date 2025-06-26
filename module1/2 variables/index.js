// Using directly declaring
a=10;
a=25;  // works
console.log(a);

// Using Var, let, const keyword
var x=20;  //1995 to 2015
var x=30;  // re assigning works

let y=25;  // ES6 2015
y=30; //works
// let y=30; // reassgning not works

const z=30; // ES6 2015
//z=40; //will not work
// const z=40; // definatly not

console.log(x,y,z);

// always use const if we don't want to change val
// const also declaring objects and arrays
// then we can using let
// avoid using var

