// Total 8 types

// Number
let a=10;

//string
let ss="Dennis";

// in js no need to declare data type

// boolean true/false
let y=true;

// null
let nn=null; //spacifically null value stored

//undefined
let un=undefined;
let age; // data type is undefined

// big Int  // very big no 64 bit no
let big_No=BigInt(1255466698856555555555665452266);

//symbol
let value=Symbol("123")  // unique val, or a object or description
// like employee id

// Object
const user={
    //key:value
    name:"Ashreek", age:22
};
// key value pair

//Array its also a object
const fruits=["Appple","Mango","Guava"];


// checking type of variables
// typeof operator

console.log(typeof(fruits));  //object
console.log(typeof(user));  //object
console.log(typeof(value));  //object
console.log(typeof(big_No));  //object
console.log(typeof(age));  //object
console.log(typeof(ss));  //object
console.log(typeof(a));  //object


// Types of data
// number, staring,object,BigInt,null,undefined,symbol