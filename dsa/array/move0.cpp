#include<iostream>
#include<vector>
 
int main(){
std::vector<int> nums={1,2,0,2,3,0,4,5,0,6,0}; 
 
int i=0,j=0;

while(j<nums.size()){
    if(nums[j] != 0){
        std::swap(nums[i],nums[j]);
        i++;
    }
   j++;
}

// {1,2,0,2,3,0,4,5,0,6,0};
// {1,2,2,3,0,0,4,5,0,6,0};

for(int i=0;i<nums.size();i++){
    std::cout<<nums[i]<<" ";
}
return 0;
}