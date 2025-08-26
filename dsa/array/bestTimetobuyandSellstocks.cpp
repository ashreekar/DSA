#include<iostream>
#include<vector>
using namespace std;

class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int i=0,j=1;
        int profit=0;
        while(j<prices.size()){
            if(prices[j]-prices[i] >= 0){
                profit=max(profit,prices[j]-prices[i]);
            }else{
                i=j;
            }
            j++;
        }
        return profit;
    }
};
 
int main(){
 
 
return 0;
}