// var aa_var=100;
// let aa_let=200

// console.log(aa_var)
// console.log(aa_let)

// {
//     var aa_var=30;
//     console.log(aa_var)

//     let aa_let=60;
//     console.log(aa_let)
// }

// console.log(aa_var) // shadowing aa=100 as it is a block scoped so ans= 30
// console.log(aa_let)  // ans= 200



var aa=10;
console.log(aa)
{
    console.log(aa)
   var aa=20;
console.log(aa)
    {
        console.log(aa) // undefined
        let aa=100;
        console.log(aa)
    }
    console.log(aa)
}
console.log(aa)


// reference error
// console.log(a)  // refernce error
// let a=10; 


// type 2
// let a=20;
// {
//     console.log(a)
//     let a=10;
// }