const students={
    'Ashreek':100,
    'Akash':100,
    'Sagar':22,
    'Chinmay':70
}

// for(let marks in students){
//     console.log(`marks of ${marks} `,students[marks]);
// }

// for(let i=0;i<Object.keys(students).length;i++){
//     console.log("The marks of "+Object.keys(students)[i]+" are "+students[Object.keys(students)[i]])
// }


// Q2

// let number=22;

// let answer;

// function ans(answer){
//     let a;
//     if(answer == number){
//         a="You are correct baby"
//     }else{
//         answer=prompt("Try again?");
//         ans(answer);
//     }
//     return a;
// }

// let after=ans(answer)
// console.log(after)

//way 2 easy

// while(answer != number){
// answer=prompt("Enter the correct number?");
// }
// console.log("Correct number baby")

// Q3 mean of 5 number using function


let mean=(...args)=>{
    let meanni;
    let sum=0;
    for(let i of args){
        sum+=i;
    }
    meanni=sum/(args.length);

    return meanni;
}

let arr=[1,2,3,4,5,7,8,9,10]
console.log(mean(...arr))