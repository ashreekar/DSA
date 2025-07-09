const Parent={
    a:10,
    b:20,
    sum:function(){
        console.log(this.a+this.b)
    }
}

//Parent.sum()

const Child={
    a:40,
    c:20,
    d:30,
    multiply:function(){
        console.log(this.a*this.d)
    }
}

Child.__proto__=Parent

// Parent.__proto__={}
Parent.__proto__=[1,'null','full']

// console.log(Child.a)
// Child.sum()

// console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$`)
console.log(Child.__proto__)
console.log(Child.__proto__.__proto__)
console.log(Child.__proto__.__proto__.__proto__)
console.log(Child.__proto__.__proto__.__proto__.__proto__)
console.log(Child.__proto__.__proto__.__proto__.__proto__.__proto__)

// console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$`)
// console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$`)


// console.log(Parent.__proto__)
// console.log(Parent.__proto__.__proto__)
// console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$`)
// console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$`)


// let arr=[1,2,3,4,4,6]

// console.log(arr.__proto__)
// console.log(arr.__proto__.__proto__)
// console.log(arr.__proto__.__proto__.__proto__)
// console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$`)
// console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$`)


// let md=new Date(3,6,25)
// console.log(md.__proto__)
// console.log(md.__proto__.__proto__)
// console.log(md.__proto__.__proto__.__proto__)
// console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$`)
// console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$`)


