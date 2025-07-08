class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    greet(){
        console.log(`Hello my name is ${this.name} and I am ${this.age} years old`)
    }
}

class student extends Person{
    constructor(name,age,grade){
        super(name,age);
        this.grade=grade;
    }

    study(){
        console.log(`${this.naem} Student is studying`)
    }
}