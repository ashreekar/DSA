const obj={
    name:"Jph",
    say:function(){
        const fin=function(){
            let name="alsex"
            const gun=()=>{
                console.log(this)
            }
            gun()
        }
        fin()
    }
}
obj.say()