// const arr=["112","33","56","22"]
// // arr.sort()
// // console.log(arr)

// // sorts alphabetically
// const arr2=[112,33,56,22]
// // arr2.sort()
// // console.log(arr2)

// // .sort() sorts alphbetically .toSorted() sorts alphabetically

// // const tostd=arr.toSorted()
// // console.log(tostd)
// // const tostd2=arr2.toSorted()
// // console.log(tostd2)

// // to rally sort numbers
// arr2.sort(function (a,b){
//     return a-b;
// })
// console.log(arr2)

// arr.sort(function (a,b){
//     return a-b;
// })
// console.log(arr)

// // to sort in reverse
// arr.sort(function (a,b){
//     return b-a;
// })
// console.log(arr)


// // minium and maximum
// console.log(Math.min(arr2)) // NaN
// console.log(Math.min(1,5,1,6,8))

// console.log(Math.max(arr2)) // NaN
// console.log(Math.max(1,5,1,6,8))

console.log([2,4,1,5,6,22,35,67,89].sort(function (a,b){
    return a>b?1:-1;
}));