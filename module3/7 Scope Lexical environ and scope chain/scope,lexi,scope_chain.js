// a function can have acceses to its outside environment but not inside as it is created later in
// execution conteext or call stack
cat()

function foo(){
    // bar() not works
    let x=10;
    // bar() works
    function bar(){
        let y=20;
        console.log(x)
        console.log(y)
        console.log(z)
        cat()  // works
        
    }
    bar() // works
   }

let z=30;
foo()
// bar() // not works

function cat(){
    let df=22;
    console.log("cat eats cat food")
    console.log(df)
}
