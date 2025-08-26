#include<iostream>
#include<vector>

std::string replaceAll(std::string str){
    std:: string ans="";

    for(auto ch : str){
        if(ch == ' '){
            ans.push_back('@');
            ans.push_back('4');
            ans.push_back('0');
        }
        else{
            ans.push_back(ch);
        }
    }
    return ans;
}
  
int main(){
std::string str="Ashreek A R from Niluvahilu Studied at East West Institute of Technology";
std::cout<<replaceAll(str);
 
return 0;
}