const arr=["Red","Blue","Pink","Grren"]

// concatonation
const arr2=["Bluevilet","Alibaque"]

const newA=arr.concat(arr2)
console.log(newA)
console.log(arr)
console.log(arr2)

const cc=arr2.concat("Pinky")
console.log(cc)

const biggy=arr.concat(newA,cc)
console.log(biggy)


// flat
const a=[[1,2,3],[4,5],6]
console.log(a)
const na=a.flat()
console.log(na)
console.log(a)

console.log(a.indexOf(6))
console.log(na.indexOf(5))

console.log(biggy.lastIndexOf("Alibaque"))

console.log(biggy.includes("brown"))
console.log(biggy.includes("cat"))
console.log(biggy.includes("with"))
console.log(biggy.includes("Blue"))
console.log(biggy.includes("Red"))
console.log(biggy.includes("Eye"))