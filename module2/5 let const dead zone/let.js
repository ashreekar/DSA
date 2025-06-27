// // ES6 part

// var a = 100;

// let x = 66;

// {
//     let u = 66;
//     var v = 8;
//     console.log(a)
//     console.log(x)
//     console.log(u)
//     console.log(v)
//     // all works already declared
// }

// console.log(a)
// console.log(x)
// // console.log(u)  // all works except this as it is let in a block
// console.log(v)


var a=10;
let b=10;

var a=20;  // works
// b=10;  // not works
{
    var a=30;
    let b=10;
}
console.log(a)
console.log(b)

// let was introduced in ES6
// let are block scope
// cannot redclare these let variables in same scope