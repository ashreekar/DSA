// named function expreesion

var a=function abc(){
    console.log("ABC is a function")
    //abc(); // nerver dare to do this 
    // triggers infinite calls
    console.log(abc)
}
a();
//abc(); // not works