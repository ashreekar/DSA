function x(){
    console.log("This is a call back function")
}

function y(x){
    x(); // fucntion which goes as a argument is an call back fucntion
}

y(x);  // function whixh takes parametrs as a function is a higher order function
