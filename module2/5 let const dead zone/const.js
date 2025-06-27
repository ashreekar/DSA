let a=10; // block scoped
const b=22; // block scoped

// cannot be redeclared or re assigned
// b=66; //not works 
//const b=56; //not works

{
    const y=33;
    console.log(y)
}
//console.log(y) error

let z;
z=10;

// const aa;
// aa=10;  //not works only single line

const name=["Ashreek","Akash"] 
//name=[1,2,4] //type error

const obj={
    name:"Ashreek",
    age:22
}
obj.hobby="teaching" //fine
name[2]="Sagr" //fine
console.log(name,obj)