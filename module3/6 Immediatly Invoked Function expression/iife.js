
// console.log(a)  // not works
(
    function a(){
        var a=10;
        console.log("Hello World")
    }
)();

// console.log(a)  // not works

// when we don't need to pollute global scope with a var
// can be declared in these scope
// so immediatly called to declare that var
