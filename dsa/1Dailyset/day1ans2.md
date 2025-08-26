## 📘 LeetCode Daily Questions

Here’s a clean and more **readable version** of the problems and their solutions while keeping the exact same content and code.

---

### 🔹 374. Guess Number Higher or Lower

**Problem:**  
We play a guessing game where a number between `1` and `n` is picked. You must guess it by calling the API:
- `-1`: guess is higher than the number
- `1`: guess is lower than the number
- `0`: guess is correct

**Solution (C++):**
```cpp
class Solution {
public:
    int guessNumber(int n) {
        int f = 1, l = n;
        int m = f + (l - f) / 2;

        while (f < l) {
            int option = guess(m);

            if (option == 0) return m;
            if (option < 0) l = m - 1;
            else f = m + 1;

            m = f + (l - f) / 2;
        }
        return m;
    }
};
```

---

### 🔹 1768. Merge Strings Alternately

**Problem:**  
Merge two strings alternately, appending leftovers at the end.

**Solution (C++):**
```cpp
class Solution {
public:
    string mergeAlternately(string word1, string word2) {
        int i = 0, j = 0;
        string ans = "";

        while (i < word1.length() && j < word2.length()) {
            ans.push_back(word1[i]);
            ans.push_back(word2[j]);
            i++, j++;
        }

        while (i < word1.length()) ans.push_back(word1[i++]);
        while (j < word2.length()) ans.push_back(word2[j++]);

        return ans;
    }
};
```

---

### 🔹 881. Boats to Save People

**Problem:**  
Each boat carries **at most 2 people** with total weight ≤ `limit`. Find minimum boats.

**Solution (C++):**
```cpp
class Solution {
public:
    int numRescueBoats(vector<int>& people, int limit) {
        sort(people.begin(), people.end());
        int i = 0, j = people.size() - 1, boat = 0;

        while (i <= j) {
            int remaining = limit - people[j--];
            boat++;
            if (i <= j && remaining >= people[i]) i++;
        }
        return boat;
    }
};
```

---

### 🔹 167. Two Sum II - Input Array Is Sorted

**Problem:**  
Find two numbers in sorted array that sum to target.

**Solution (C++):**
```cpp
class Solution {
public:
    vector<int> twoSum(vector<int>& numbers, int target) {
        int i = 0, j = numbers.size() - 1;

        while (i < j) {
            if (numbers[i] + numbers[j] == target)
                return {i + 1, j + 1};
            else if (numbers[i] + numbers[j] > target)
                j--;
            else
                i++;
        }
        return {-1, -1};
    }
};
```

---

### 🔹 153. Find Minimum in Rotated Sorted Array

**Problem:**  
Find the minimum in a rotated sorted array.

**Solution (C++):**
```cpp
class Solution {
private:
    int findPivot(vector<int>& nums) {
        int s = 0, e = nums.size() - 1;
        int m = s + (e - s) / 2;

        while (s < e) {
            if (nums[m] >= nums[0]) s = m + 1;
            else e = m;
            m = s + (e - s) / 2;
        }
        return nums[m];
    }

public:
    int findMin(vector<int>& nums) {
        int pivot = findPivot(nums);
        if (pivot > nums[0]) return nums[0];
        return pivot;
    }
};
```

---

## 📅 26/08/2025

### 🔹 219. Contains Duplicate II

**Problem:**  
Check if duplicates exist within distance `k`.

**Solution (C++):**
```cpp
class Solution {
public:
    bool containsNearbyDuplicate(vector<int>& nums, int k) {
        for (int i = 0; i < nums.size(); i++) {
            int jSize = nums.size() - 1 > i + k ? i + k : nums.size() - 1;
            for (int j = i + 1; j <= jSize; j++) {
                if (nums[i] == nums[j]) return true;
            }
        }
        return false;
    }
};
```

---

### 🔹 121. Best Time to Buy and Sell Stock

**Problem:**  
Maximize profit by buying and selling once.

**Solution (C++):**
```cpp
class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int i = 0, j = 1, profit = 0;

        while (j < prices.size()) {
            if (prices[j] - prices[i] >= 0)
                profit = max(profit, prices[j] - prices[i]);
            else
                i = j;
            j++;
        }
        return profit;
    }
};
```

---

### 🔹 209. Minimum Size Subarray Sum

**Problem:**  
Find smallest subarray with sum ≥ target.

**Solution (C++):**
```cpp
class Solution {
public:
    int minSubArrayLen(int target, vector<int>& nums) {
        int i = 0, j = 0, sum = 0, res = INT_MAX;

        while (j < nums.size()) {
            sum += nums[j];
            while (sum >= target) {
                res = min(res, j - i + 1);
                sum -= nums[i++];
            }
            j++;
        }
        return res == INT_MAX ? 0 : res;
    }
};
```

---

### 🔹 424. Longest Repeating Character Replacement

**Problem:**  
Longest substring with ≤ k replacements.

**Solution (C++):**
```cpp
class Solution {
public:
    int characterReplacement(string s, int k) {
        vector<int> count(26, 0);
        int i = 0, res = 0, maxChar = 0;

        for (int j = 0; j < s.length(); j++) {
            count[s[j] - 'A']++;
            maxChar = max(maxChar, count[s[j] - 'A']);

            if (j - i + 1 - maxChar > k) {
                count[s[i] - 'A']--;
                i++;
            }
            res = max(res, j - i + 1);
        }
        return res;
    }
};
```

---

### 🔹 128. Longest Consecutive Sequence

**Problem:**  
Find the longest consecutive sequence.

**Solution (C++):**
```cpp
class Solution {
public:
    int longestConsecutive(vector<int>& nums) {
        if (nums.empty()) return 0;
        sort(nums.begin(), nums.end());

        int res = 1, curr = 1;
        for (int i = 1; i < nums.size(); i++) {
            if (nums[i] == nums[i - 1]) continue;
            if (nums[i] == nums[i - 1] + 1) curr++;
            else curr = 1;
            res = max(res, curr);
        }
        return res;
    }
};
```

---

✅ That’s all **10 problems**, neatly organized with clear separation of **problem statement** and **solution**.

