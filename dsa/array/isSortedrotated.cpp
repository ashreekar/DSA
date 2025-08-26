#include<iostream>
#include<vector>
using namespace std;

class Solution {
public:
    bool check(vector<int>& nums) {
        int prevIndex=0;
        int cnt=0;

        if(nums[prevIndex] < nums[nums.size()-1]) cnt++;

        for(int i=1;i<nums.size();i++){
            if(nums[i] < nums[i-1]) cnt++;
        }

        return cnt<=1;
    }
};
 
int main(){
 
 
return 0;
}