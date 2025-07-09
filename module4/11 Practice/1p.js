let obj={
    x:10,
    y:20,
    z:()=>{
        console.log(`hello ${this}`)
    }
}

// console.log(obj.cake)

function func(){
    let x=10;
    return (
        gun =function(){
            return x+1
        }
    )
}

obj.__proto__=func;
const ans=obj.__proto__();
console.log(ans())