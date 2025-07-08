const User={
    Fname:["Benki","Millu"],
    Lname:{
        lf1:'Seena',
        lf2:"AnythigKumar"
    },
    age:2,
    printDetails: function(){
        console.log("Details of user")
    },
    greet:function (){
        console.log("Greeting")
    }
}

// Upadting existing one

User['Lname']['lf2']='Panja';
console.log(User)
console.log(User.Lname.lf2)

User.Lname.lf2='Kumar';
console.log(User)
console.log(User.Lname.lf2)

User.age=3;
console.log(User)
console.log(User.age)

// Setting new property

User.hobbies=['Cricket','Chess','Cooking','Music','Cinema'];
console.log(User.hobbies)
console.log(User)

User.farewell=()=>{
    console.log("Good bye!!")
}
console.log(User)
User.farewell()