//1.Print odd numbers in an array

var odd = (function(array){
    for(var i = 0 ; i< array.length ; i++){
               if(array[i]%2!=0){
                  console.log(array[i])
               } 
          }
    })([1,2,3,4])

// 2.Convert all the strings to title caps in a string array

var A = (function (str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    } 
    console.log(str.join(' '));
  })("KAVITHA IS MY NAME");

//3.Sum of all numbers in an array

var a = (function(array){
    var sum = 0;
         for(var i = 0 ; i< array.length ; i++){
            sum = sum + array[i];
          }
          
          console.log(sum);
    })([1,2,3,4])

//4.Return all the prime numbers in an array

var a = (function(numArray){
    numArray = numArray.filter((number) => {
      for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
      }
      return true;
    });
    console.log(numArray);
})([1,2,3,4])

//5.Return all the palindromes in an array

var a = (  function (arr, n)
{
    // Traversing each element of the array
    // and check if it is palindrome or not
    for (let i = 0; i < n; i++)
    {
        let ans = isPalindrome(arr[i]);
        if (ans == false)
        console.log(false);
            //return false;
          
    }
    //return true;
    console.log(true);
})
console.log([1,2,3] , 3)

//6.Return median of two sorted arrays of the same size.

var a = (function(array){
    let dup = [...new Set(array)];
    console.log(dup);
   })([1,1,2,3,4])

//7.Rotate an array by k times

var c = (function(array , k){
  k = k % a.length;
    if(k < 0){
      k += a.length;
    }

    reverse(a, 0, a.length - k - 1);
    reverse(a, a.length - k, a.length - 1);
    reverse(a, 0, a.length - 1);
    console.log(c);
  })
  console.log([1,2,3,4] , 2)

//8.Remove duplicates from an Array

let chars = ['A', 'B', 'A', 'C', 'B'];

let uniqueChars = [];
chars.forEach((c) => {
    if (!uniqueChars.includes(c)) {
        uniqueChars.push(c);
    }
});

console.log(uniqueChars);


   



   

