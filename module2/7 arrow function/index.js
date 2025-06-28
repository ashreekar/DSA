// ES6 
// Arrow functions
// shorter form of functions

function sum(a,b){
    return a+b;
}

// arrow function
// we are assgning a function to a varibale
//function expression // works like variable hoisting

const sum2 = (a, b)=>a+b; // no need of curly brace and return keyword
// for one line of fun code

const anotherfun=(a,b,c)=>{
    console.log("Sum of 3 numbers id \n\t",a+b+c)
    return a+b+c;
}

// const result=sum(2,4)
// console.log(result)
// console.log(sum2(2,4))

console.log(anotherfun(2,3,5))