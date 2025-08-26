#include<iostream>
#include<vector>


char maxChars(std::string str){
    int count[26]={0};

    for(int i=0;i<str.length();i++){
        count[str[i]-'a']++;
    }
    int maxiI=0;
    for(int i=1;i<26;i++){
        if(count[i] > count[maxiI]) maxiI=i;
    }

    return 'a'+ maxiI;
}
 
int main(){
std::string str="Ashreek";
//std::cin>>str;

char out=maxChars(str);
std::cout<<out<<"\n";
return 0;
}