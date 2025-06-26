// loops

// for loop
// for in 
// for of
// while
// do while

// for (let i=1;i<=100;i++){
//     console.log(i);
// }

let array=["Athravalli","Bengaluru","Thalluru","Melukoppa","Nelamangala","Geneva","San Jose"];

// of gives value
// for (let a of array){
//     console.log(a);
// }

// // in gives keys
// for (let a in array){
//     console.log(array[a]);
// }

const marks_obj={
    Ashreek:99, Akash:97, Sagar:45
};


// to iterate to keys
for(key in marks_obj){
    console.log(key);
    console.log(marks_obj[key]);
}
// proper object can't be iterated
let i=0;
// while(i<10){
//     console.log(i+1);
//     i++;
// }

// executes at least once
do{
    console.log(i+1);
    i++;
}while(i<0)