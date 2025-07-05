let fruits=['Apple','Mango','Banana','Guava']

let ans=fruits.splice(1,1,'Jackfruit')
console.log(fruits)
console.log(ans)

let a=[1,2,3,4,5,6,7]
// let aa=a.slice(1,4)
// console.log(aa)

let aa=a.toSpliced(1,3,'two','three','four')
console.log(aa)
console.log(a)

let anss=fruits.concat(a)
console.log(fruits)
console.log(anss)