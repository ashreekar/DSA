#include<iostream>

void fibo(int n){
    int a=0,b=1;
    std::cout<<a<<" "<<b<<" ";

    for(int i=3;i<=n;i++){
        int fibo=a+b;
        a=b;
        b=fibo;
        std::cout<<fibo<<" ";
    }
    std::cout<<std::endl;
}

int main(){
    int n;
    std::cin>>n;
    fibo(n);

    return 0;
}