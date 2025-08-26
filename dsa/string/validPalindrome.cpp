#include<iostream>
#include<vector>

// If a char 's' available it have values between 'a' > 's' > 'z" because of ASCII 
// So 1+'B'-'A' == 2 => 'B'-'A'=1 || 'A'-'A'=0;
bool isValidChar(char ch){
    if((ch>='a' && ch<='z') || (ch>='A' && ch<='Z') || (ch>='0' && ch<='9')) return true;

    return false;
}

char toLowerCase(char ch){
    if((ch>='a' && ch<='z') || (ch>='0' && ch<='9')){
        return ch;
    }  

    return ch-'A'+'a';
}

bool checkPallindrome(std::string str,int l){
    int i=0,j=l-1;

    while(i<j){
        if(str[i] != str[j]){
            return false;
        }
        i++,j--;
    }
    return true;
}
 
int main(){
std::string pallindrome="Mal 123  $%^ a *&7 y7a321lam";

std::string newString;
for(int i=0;i<pallindrome.length();i++){
    char ch=pallindrome[i];
    if(isValidChar(ch)){
        newString.push_back(ch);
    }
}

std::cout<<newString<<std::endl;

for(int i=0;i<newString.length();i++){
    newString[i]=toLowerCase(newString[i]);
}

std::cout<<newString<<std::endl;

if(checkPallindrome(newString,newString.length())){
    std::cout<<"String "<<newString<<" is a pallindrome";
}else{
    std::cout<<"String "<<newString<<" is not a pallindrome";
}
 
return 0;
}