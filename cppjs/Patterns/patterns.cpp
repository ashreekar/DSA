#include <iostream>
// using namespace std;

void pattern1(int n)
{
    // to print
    // 1 2 3 4
    // 1 2 3 4
    // 1 2 3 4
    // 1 2 3 4

    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= n; j++)
        {
            std::cout << j << " ";
        }
        std::cout << std::endl;
    }
}

void pattern2(int n)
{
    // to print
    // 4 3 2 1
    // 4 3 2 1
    // 4 3 2 1
    // 4 3 2 1 

    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= n; j++)
        {
            std::cout << n-j+1 << " ";
        }
        std::cout << std::endl;
    }
}

void pattern3(int n)
{
    // to print
    // 1 2 3
    // 4 5 6
    // 7 8 9

    int nn=1;
    for (int i = 1; i <= n; i++)
    {
        for (int j=1; j <= n; j++)
        {
            std::cout << nn++ << " ";
        }
        std::cout << std::endl;
    }
}

void pattern4(int n){
    // To print
    // *
    // * *
    // * * *
    // * * * *

    for(int i=0;i<n;i++){
        for(int j=0;j<=i;j++){
            std::cout<<"*"<<" ";
        }
        std::cout<<"\n";
    }

}

void pattern5(int n){
    // To print
    // 1 
    // 2 2
    // 3 3 3
    // 4 4 4 4

    for(int i=1;i<=n;i++){
        for(int j=1;j<=i;j++){
            std::cout<<i<<" ";
        }
        std::cout<<"\n";
    }

}

void pattern6(int n){
    int cnt=1;
    for(int i=1;i<=n;i++){
        for(int j=1;j<i+1;j++){
            std::cout<<cnt++<<" ";
        }
        std::cout<<std::endl;
    }
}

void pattern7(int n){

    for(int i=1;i<=n;i++){
        //int cnt=i;
        for(int j=i;j<=2*i-1;j++){
            std::cout<<j<<" ";
        }
        std::cout<<std::endl;
    }
}

void pattern8(int n){
    for(int i=1;i<=n;i++){
        // formula i-j+1  if my i=3 3-1+1=3, 3-2+1=2, 3-3+1=1 ""j is 1,2,3"" ""i is 3""
        for(int j=i;j>0;j--){
            std::cout<<j<<" ";
        }
        std::cout<<std::endl;
    }
}

void pattern9(int n){
    for(int i=1;i<=n;i++){
       char start='A'+i-1;
        for(int j=1;j<=n;j++){
            std::cout<<start<<" ";
        }
        std::cout<<std::endl;
    }
}

void pattern10(int n){
    for(int i=1;i<=n;i++){
        for(int j=1;j<=n;j++){
           char ch='A'+j-1;
           std::cout<<ch<<" "; 
        }
        std::cout<<std::endl;
    }
}

int main()
{
    // cout << "Enter number for patern 1 or 2 or 3 or 4: ";
    // int n1;
    // cin >> n1;
    // pattern1(n1);
    // pattern2(n1);
    // pattern4(n1);

    // std::cout << "Enter number for patern 5: ";
    // int n2;
    // std::cin >> n2;
    //pattern5(n2);

    pattern10(4);

    return 0;
}