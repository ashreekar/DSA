
#include<iostream>
#include<vector>
using namespace std;
class Solution {
public:
    bool containsNearbyDuplicate(vector<int>& nums, int k) {
        for(int i=0;i<nums.size();i++){
            // traverse array if window is bigger or
            // window = i+k this is size of window
            int jSize=nums.size()-1 > i+k ? i+k :nums.size()-1;
            for(int j=i+1;j<=jSize;j++){
                if(nums[i]==nums[j]) return true;
            }
        }
        return false;
    }
};


 
int main(){
 
 
return 0;
}