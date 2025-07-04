// find
// gives 1st elemtn to satisfy condtion

let arr=[12,5,6,2,3,77,89,3,4];

let fstevn=arr.find(num => num %2==0)
console.log(fstevn)

// for last
// findLast

let lstevn=arr.findLast(num => num %2 ==0)
console.log(lstevn)

// to find index have

// findIndex
//findlastIndex

let fi=arr.findIndex(num => num%2 ==0)
let li=arr.findLastIndex(num => num%2 ==0)
console.log(fi,li)