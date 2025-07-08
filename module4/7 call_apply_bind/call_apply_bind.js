// const user={
//     fName:"Ashreek",
//     lName:"A R",
//     printName:function (){
//         console.log(`My name is ${this.fName} ${this.lName}`)
//     }
// }

const user2={
     fName:"Boom Boom",
    lName:"CAR"
}


// CALL

//user.printName.call(user2);

const user={
    fName:"Ashreek",
    lName:"A R",
    
}

let printName=function (age,place){
        console.log(`My name is ${this.fName} ${this.lName}`)
        console.log(`I am ${age} years old and I am from ${place}`)
    }

printName.call(user,'23','Athravalli')


// APPLY
printName.apply(user2,['33','Niluvagilu'])

// Bind
let ans=printName.bind(user,'22','Agumbe')
ans()