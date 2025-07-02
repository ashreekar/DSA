#include<iostream>
 
int nofoones(int n){
    int ans=0;

    while(n !=0){
        int bit=n&1;

        if(bit){
            ans++;
        }

        n=n>>1;
    }
    return ans;
}
 
int main(){

    int n=2;

    std::cout<<nofoones(7);
 
 
return 0;
}