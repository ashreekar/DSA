let fibo=(n)=>{
    let a=0,b=1;
    console.log(a," ",b," ");

    for(let i=3;i<=n;i++){
        let _fibo=a+b;
        a=b;
        b=_fibo;
        console.log(_fibo," ");
    }
}

console.log(fibo(9));