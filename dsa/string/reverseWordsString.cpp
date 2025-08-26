#include<iostream>
#include<vector>

// Flow of solving
// 1) create a function to revrse a string
// 2) while runnig from 0 to end
// 3) check if we have ' ' means end of word
// 4) so reverse from previuos ' ' th index+1 to cureent ' ' th index-1
// 5) so start = 0 (in begingig)  ,  end = index-1; if we are at ' '
// 6) After reversing update strat and end can be updated when we got ' '

std::string reverseWords(std::string str){
    // std::string word;
    int s=0;
    for(int i=0;i<str.length()+1;i++){
        if(str[i] == ' ' || str[i] == '\0'){
            int e=i-1;

            while(s<e){
                std::swap(str[s++],str[e--]);
            }

            s=i+1;
        }
    }
    return str;
}
 
int main(){
std::string str="This is a sample string to reverse";

// std::cin>>str;

std::string ansStr=reverseWords(str);
std::cout<<ansStr<<"\n";
 
return 0;
}