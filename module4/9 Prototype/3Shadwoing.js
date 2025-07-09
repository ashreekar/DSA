// What if we write a methode as our custom whose name is as same as in prototype
// eg IObject.protoype has method --- .toString()
// if I write toString() and make it log something lese

let dates=new Date();

console.log(dates)
console.log(dates.getFullYear())

dates.getFullYear=function (){
    console.log("Namskara Devru!!")
}
console.log(dates)
dates.getFullYear()

const User={
    x:10,
    y:20,
    toString:function (){
        console.log('tricked toString()')
    },
    __proto__:'Abcd' // not works with variables but with function
}

User.toString()
// console.log(User.__proto__)