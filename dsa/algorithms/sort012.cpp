#include<iostream>
#include<vector>
 
int main(){
std::vector<int> nums={1,1,2,2,0,0,0,1,1,0,0};


int l=0,m=0,h=nums.size()-1;

while(m<=h){
    if(nums[m]==1){
        m++;
    }
    else if(nums[m]==0){
        std::swap(nums[l],nums[m]);
        l++;
        m++;
    }else{
        std::swap(nums[h],nums[m]);
        h--;
    }
}

for(auto num:nums){
    std::cout<<num<<" ";
}
 
return 0;
}