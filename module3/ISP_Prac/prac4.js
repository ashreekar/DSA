let arr=['ananas','apple','banana','Honey','Bamboo','Aaple']

let srtd=arr.sort()
console.log(arr)
console.log(srtd)

var x=5;
(function(){
    var x=10
    console.log(x)
})()
console.log(x)

const number=[1,2,3,4,5]
const [f,s,...r]=number
console.log(f,s,r)

function sum(...args){
    return args.reduce((acc,curr)=>acc+curr,0)
}
console.log(sum(...number))

let ss='hello'
let char=[...ss]
console.log(char)