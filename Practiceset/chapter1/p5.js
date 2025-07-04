// Q1
let arr = [1, 2, 3, 4, 5, 6]
// let a=prompt("Enter a number?");

//a=Number.parseInt(a)
// arr.push(a)
// console.log(arr)

// Q2 modify Q1
// let a;
// do {
//     a = prompt("ENter number")
//     a = Number.parseInt(a)
//     arr.push(a)
//     console.log(arr)
// } while (a != 0)


// Q3   
let nums=[1,2,30,60,4,5,70,50,67,55,43,22]

let filtered=nums.filter(num=>num%10 == 0)
console.log(nums)
console.log(filtered)

// Q4
let square=nums.map(x=>x*x)
console.log(square)

//Q5
const fact_arr=[1,2,3,4,5,6];
let factorial=fact_arr.reduce((acc,curr)=>{
    acc *= curr;
    return acc;
},1)
console.log(fact_arr)
console.log(factorial)