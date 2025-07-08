'use strict'

function greet(){
    console.log("Namskara Devru!!")
    console.log(this)  // gives a global object in node
    // gives a window objectb in browser

    console.log(this === window)  // when called as  window.greet()
    console.log(this === undefined)  //when called as greet()
}


greet()
window.greet()  // works in browser gives this as window
