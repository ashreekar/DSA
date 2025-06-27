// execution context
let x=10;


function sum(a,b){
    return a+b;
}

let result=sum(7,8);
console.log(result);

// Execution context

// 1 Global EC
//  1.1 Memory   x=undefined
//               fn memory
//               result=undefined
//  1.2 Code exec x=10
//                function(not called)
//                function called
//                2 fn execution context
//                  2.1 Memory nothing declare
//                  2.2 return a+b=15
//  fn pop
//  1.2 result=15
//      print