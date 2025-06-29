function a(){
    console.log("Function a is called");
}

function b(param){
    console.log("Fucntion b is called");
    //param(); //way 1
    return param;
}

//b(a); // works way 1

// other way
let another_fun=b(a);  // This is like function expression only a whole another-fun=function a(){}

another_fun();