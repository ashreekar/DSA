#include<iostream>
#include<vector>
 
int main(){
    int n=2;
    // std::cin>>n;
int s=0,e=n;
int m=s+(e-s)/2;
int ans=-1;
while(s<=e){
    if(m*m == n){ 
        ans=m; 
        break;
    }
    else if(m*m < n){
        ans=m;
        s=m+1;
    }else{
        e=m-1;
    }

    m=s+(e-s)/2;
}


double factor=1;
double na=ans;
for(int i=0;i<10;i++){
    factor=factor/10;
    for(double j=na;(j*j)<n;j+=factor){
        na=j;
    }
}
float bb=0.1123;
std::cout<<ans<<std::endl<<na<<std::endl<<bb;
 
return 0;
}