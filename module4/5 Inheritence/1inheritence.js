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

class VipCustomer extends Customer{
    constructor (name,email,viplevel){
        super(name,email);
        this.viplevel=viplevel;
    }

    getVipStaus(setVip){
        this.viplevel=setVip;
        console.log(this.viplevel)
    }

}

const vipCustomer=new VipCustomer('Sara','sara@mail.com','Platinum')
console.log(vipCustomer)

vipCustomer.getVipStaus('Dimond')
console.log(vipCustomer)