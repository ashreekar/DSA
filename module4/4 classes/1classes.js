class Customer{

    constructor(name,email){
        this.name=name;
        this.email=email;
        console.log(`New customer is added :
            name: ${this.name}`)
    }

    get fData(){
        return this.name;
    }

    getDetails(){
        console.log(`The customer name is ${this.name} and email is ${this.email}`)
    }
}

const Customer1=new Customer('Alice','alice@mail.com')
// Customer1.getDetails()

// let name=Customer1.fData;
// console.log(name)

console.log(Customer1)