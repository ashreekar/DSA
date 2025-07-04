// operators and conditionals

// Q1
// let age=9;
// on browser
// let age=prompt("whtat is your age?") // only runs in browser

// if( age <= 20 && age >= 10){
//     console.log("True")
// }else{
//     console.log("False")
// }

// Q2
// let age=22;

// switch(age){
//     case 10:console.log("Your 10"); break;
//     case 20:console.log("Youre 20"); break;
//     case 30:console.log("yOU ARE 30"); break;
//     default: console.log("Yore not 10,20,30")
// }

// prompts takes number as string
// so
// let age=prompt("age?")
//age=Number.parseInt(age);
//or 
// switch(age){
//     case '10':console.log("Your 10"); break;
//     case '20':console.log("Youre 20"); break;
//     case '30':console.log("yOU ARE 30"); break;
//     default: console.log("Yore not 10,20,30")
// }

// Q3
// let num=prompt("number?")
// num=Number.parseInt(num);

// if(num %2===0 && num%3==0){
//     console.log("is")
// }else{
//     console.log("Is not")
// }

// Q4
// let num=prompt("number?")
// num=Number.parseInt(num);

// if(num %2===0 || num%3==0){
//     console.log("is")
// }else{
//     console.log("Is not")
// }

//Q5
let age=prompt("age?")
age=Number.parseInt(age)

age>=18 ? console.log("You can drive"):console.log("You cannot drive")