//Normal Function

greet();  // works fine bcs memory is already given for fn greet()

function greet(){
    console.log("Hello");
}

greet();  // can call fn after declaring 


// Arrow function or function expression
// greeting(); //not fine error

var greeting=()=>{
    console.log("Hello world")
}

greeting();  // works fine already declared