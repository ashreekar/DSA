#include<iostream>
#include<math.h>
 
int dectobin(int n){
    int ans=0;
    int i=0;

    while(n !=0 ){
        int dig=n&1;

        ans= ans+(pow(10,i)*dig);
        i++;
        n=n>>1;
    }
    return ans;
}
 
int main(){

std::cout<<dectobin(23);

return 0;
}