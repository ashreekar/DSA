// higher order function
// used to perform anything on each elemnt
// do not modify original array
// gives new array

const nums=[1,2,3,4,5];

// need square of each element

function square(x){
    return x*x;
}

const sq_num=nums.map(square)
console.log("After squaring each num main array")
console.log(nums)
console.log("After squaring each num returned array")
console.log(sq_num)

// ned double of the same arrya
// const db_num=nums.map(function(x){
//     return 2*x;
// })

// or

const db_num=nums.map(x=>2*x)

console.log("After doubling each num main array")
console.log(nums)
console.log("After doubling each num returned array")
console.log(db_num)

// lets say an arry of object extract all fNames

const users=[
    {
        fName:"Ashreek",
        lName:"A R",
        age:"22"
    },
     {
        fName:"Sagar",
        lName:"N A",
        age:"22"
    },
     {
        fName:"Akash",
        lName:"A R",
        age:"20"
    },
     {
        fName:"Chinmay",
        lName:"A M",
        age:"18"
    }
]

const fNames=users.map(person=>person.fName);
console.log(fNames)