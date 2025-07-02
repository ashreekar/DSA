#include <iostream>

int sum(int n)
{
     int ans = 0;
    while (n != 0)
    {
        int digit = n % 10;
        n = n / 10;

        ans += digit;
    }
    return ans;
}

int prouduct(int n)
{
     int ans = 1;
    while (n != 0)
    {
        int digit = n % 10;
        n = n / 10;

        ans *= digit;
    }
    return ans;
}

int main()
{

    int ans=prouduct(234)-sum(234);
    std::cout<<ans<<std::endl;
    return 0;
}