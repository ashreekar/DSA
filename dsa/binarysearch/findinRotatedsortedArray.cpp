#include<iostream>
#include<vector>
using namespace std;
 
    int pivot(vector<int> arr){
    int s=0,e=arr.size()-1;
    int m=s+(e-s)/2;

    while(s<e){
        if(arr[m]>=arr[0]){
            s=m+1;
        }
        else if(arr[m]<arr[0]){
            e=m;
        }
        m=s+(e-s)/2;
    }
    return m;
}
    int search(vector<int>& nums, int target) {
        int piv=pivot(nums);
        int s,e;
        if(nums[piv]<=target && target<=nums[nums.size()-1]){
            s=piv,e=nums.size()-1;
            int m=s+(e-s)/2;
            while(s<=e){
            if(nums[m]==target){ return m;}
            else if(nums[m]>target){ e=m-1;}
            else{ s=m+1;}
            m=s+(e-s)/2;
        }
        }
        else{
            s=0;
            e=piv-1;
            int m=s+(e-s)/2;
            while(s<=e){
            if(nums[m]==target){ return m;}
            else if(nums[m]>target){ e=m-1;}
            else{ s=m+1;}
            m=s+(e-s)/2;
        }
        }
        return -1;
    }

int main(){
 
 
return 0;
}