// Prime or not
#include<iostream>
using namespace std;
 
bool primeornot(int n){
    for(int i=2;i<n;i++){
        if(n%i == 0) return false;
    }
    return true;
}

int main(){
int a=primeornot(11);
cout<<a;
 
return 0;
}