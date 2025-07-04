// // Q1
// // console.log("har\"".length)
// // console.log([1,2,3,4,5,6].length)


// // Q2
// let str='My village is a beautiful village which is in Westren Ghats of Karnataka which is called Malenadu which is know for its culture'
// const word='beautiful'

// // console.log(`The word ${word} is ${str.includes(word)?'is ' :'is not '} in the stentce \n \t \"${str}\"`)

// console.log(str.startsWith("village"))
// console.log(str.endsWith("culture"))

// console.log(str.toLowerCase())

// Q4
let mn="Please give Rs 1000"
let amount=mn.slice("Please give Rs".length+1)
amount=Number.parseInt(amount)
console.log(typeof(amount))
console.log(amount)