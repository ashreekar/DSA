#include<iostream>
#include<vector>
 
int main(){
std::vector<int> nums={0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1};

int i=0,j=nums.size()-1;

while(i<j){
    if(nums[i]==0){ i++; }
    if(nums[j]==1){ j--; }

    // if(i<j ){  // if i crossed j and i=1 j=0 then swap will cause unsorting
    //     std::swap(nums[i],nums[j]);
    //     i++,j--;
    // } 

    if(i<j && nums[i]==1 && nums[j]==0){
        std::swap(nums[i],nums[j]);
        i++,j--;
    }
}

for(auto num : nums){
    std::cout<<num<<" ";
}
 std::cout<<std::endl;
return 0;
}