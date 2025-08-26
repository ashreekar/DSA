#include<iostream>
#include<vector>
 
int main(){
 std::vector<int> nums={1,2,3,4,5};
 std::vector<std::vector<int>> ans;
 int target=10;

 for(int i=0;i<nums.size()-2;i++){
    for(int j=i+1;j<nums.size()-1;j++){
        for(int k=j+1;k<nums.size();k++){
            if(nums[i]+nums[j]+nums[k] == target){
                // std::vector<int> tmp;
                // tmp.push_back(nums[i]);
                // tmp.push_back(nums[j]);
                // tmp.push_back(nums[k]);

                // ans.push_back(tmp);

                std::cout<<nums[i]<<" "<<nums[j]<<" "<<nums[k]<<std::endl;
            }
        }
    }
 }
 
return 0;
}