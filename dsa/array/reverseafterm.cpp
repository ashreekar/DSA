#include<iostream>
#include<vector>
using namespace std;

void reverseArray(vector<int> &arr , int m) {
    // Write your code here  

    int i=m+1,j=arr.size()-1;

    while(i<j){
        swap(arr[j],arr[i]);
        i++;
        j--;
    }     	
}
 
int main(){
 
 
return 0;
}