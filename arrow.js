//1.Print odd numbers in an array

var arr = [1, 2, 3, 4, 5, 6] 
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2!== 0) {
            console.log(arr[i] + "");
        }
    }
  

//2.Convert all the strings to title caps in a string array 

titleCase = (str) => {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    } 
    return str.join(' ');
  }
  console.log(titleCase("WELCOME TO RAMKISHORE" )) 
  
//3.Sum of all numbers in an array

var numbers = [45, 34, 12, 10, 8, 9],
    sum     = numbers.reduce((a, b) => a + b, 0);
    

console.log(sum)

//4.Return all the prime numbers in an array 

const newArray = [1, 3, 2, 5, 10];
const isPrime = num => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num !== 1;
};


const myPrimeArray = newArray.filter(element => isPrime(element));
console.log(myPrimeArray);

//5.Return all the palindromes in an array

Palindrome = (arr, n) =>
    {
        // Traversing each element of the array
        // and check if it is palindrome or not
        for (let i = 0; i < n; i++)
        {
            let ans = isPalindrome(arr[i]);
            if (ans == false)
                return false;
        }
        return true;
    }
    console.log(Palindrome())





