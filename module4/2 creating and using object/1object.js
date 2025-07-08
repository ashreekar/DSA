// Empty object literal
// let obj={}

// Object literal\

const User={
    Fname:["John","Bob"],
    Lname:{
        lf1:'Ashreek',
        lf2:"Anythig"
    },
    age:23,
    printDetails: function(){
        console.log("Details of user")
    },
    greet:function (){
        console.log("Greeting")
    }
}


// DOT NOTATION
console.log(User.Fname)
console.log(User.age)
User.greet()

console.log(User.Fname[0])
console.log(User.Lname.lf1)

// Bracket notation
console.log(User['age'])

// dot notation works but at some place bracket notation is needed

function logProperty(property){
    //console.log(User.property)  // not works
    console.log(User[property])
}

logProperty("age")