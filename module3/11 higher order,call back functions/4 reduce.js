const arr=[1,2,3,4,5,6]

// for sum of numbers in arr

// traditionslly
let sum=0
// for(let i=0;i<arr.length;i++){
//     sum+=arr[i]
// }

// or 

// for(let num of arr){
//     sum += num
// }
// console.log(sum)

// suing reduce

let summy=arr.reduce(function(acc,curr){
        acc += curr;
        return acc;
    },0)
    console.log(summy)

// for the maximum nuber

// traditionslly
let max=arr[0]
// for(let i=0;i<arr.length;i++){
//     if(max < arr[i]) max=arr[i]
// }
// console.log(max)

// or 

// for(let num of arr){
//     if(max < num) max=num
// }
// console.log(max)

// suing reduce

let maxi=arr.reduce(function(acc,curr){
    return acc<curr?curr:acc;
},arr[0])
console.log(maxi)