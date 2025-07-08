const obj={
    x:10,
    y:()=>{
        console.log(this)
        // console.log(this == window)
        console.log(this == obj)
    },
    z:function (){
           console.log(this)
        // console.log(this == window)  // true
        console.log(this == obj)  // global object
    },
    f:function (){
        let g=()=>{
            console.log(this)
            console.log(this == window) //false
            console.log(this == obj)
        }
        g()
    }
}

obj.y()
obj.z()
obj.f()