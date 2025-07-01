function x(){
    let aa=10;  // works for let, var , const

    function y(){
        console.log(aa)
    }

    return y;
}

const z=x()
console.log(z)

z()