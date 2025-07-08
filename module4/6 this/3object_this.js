const obj={
    x:10,
    y:function(){
        console.log(this)
        console.log(this === obj)
    },
    z:()=>{
        console.log(this)
    }
}

obj.y()
obj.z()