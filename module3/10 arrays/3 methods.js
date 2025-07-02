const colours=["red","blue","green","notcol","white"]

// at()

console.log(colours.at(2)) //gives lement at index

// push and pop

colours.pop()
console.log(colours)

let return_val1=colours.pop()
console.log(colours)
console.log(return_val1)

// push
colours.push("bluevilet")
console.log(colours)

let return_val2=colours.push("Alibauque")
console.log(colours)
console.log(return_val2)

console.log("**************************************************************************************************************************************************************")

// shift and unshift
// eg array

const num=[1,2,3,4,5,6]
console.log(num)

num.shift()
console.log(num)

let return_val3=num.shift();
console.log(num)
console.log(return_val3)

// unshift
num.unshift(1)
console.log(num)

let return_val4=num.unshift(2)
console.log(num)
console.log(return_val4)