
// //way 1
// let sum=(a,b)=>{
//     b= (b==undefined)?0:b;  //way 1
//     return a+b;
// }

// console.log(sum(2))

// //way2 
// let mul=(a,b=1)=>{
//     return a*b;
// }
// console.log(3)

// // spread syntax
// let div=(a,b)=>{
//     return a/b;
// }

// const arr=[18,3];
// const di=div(...arr)
// console.log(di)


// let ar2=[1,3,4,5,6]

// let obj={...ar2}
// console.log(obj)

// Rest parameter // opposite of spread param 
// collecting multiple args in one elemnt

function sumofall(a,b,...args){
    console.log(a,b)
    let sum=0;
    for(let value of args){
        sum+=value;
    }
    return sum;
}

let answer=sumofall(1,3,5,6,7)
console.log(answer)


const arr=[1,2,3,4,5,6,7,8,9]

function sine(...args){
    let sum=0;
    for(let cal of args){
        sum += cal;
    }
    return sum;
}

console.log(sine(...arr))