(1)

1. Print odd numbers in an array

Code:
const c = [1,2,5,6,3,2];
    var b = [];
let a = function(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            b.push(arr[i]);
        }
    }
    return b;
}
console.log(a(c));

Output
[ 1, 5, 3 ]


2. Convert all the strings to title caps in a string array

Code
let c = "all is well";
let a = function(b) {
  var b = b.toLowerCase().split(" ");
    for (let i = 0; i < b.length; i++) {
      b[i] = b[i].charAt(0).toUpperCase() + b[i].slice(1);
    }
    return b.join(" ");
}
console.log(a(c));

Output
All Is Well


3. Sum of all numbers in an array

Code
let c = [1,2,5,6,3,2];
let a = function(b) {
  let sum = 0;
    for (let i = 0; i < b.length; i++) {
      sum += +b[i];
    }
    return sum;
}
console.log(a(c));

Output
19


4. Return all the prime numbers in an array

Code
let c = [100, 200, 31, 13, 97, 10, 20, 11];
let a = function(b) {
  var arr = [];
  var a;
  for (i=0; i<b.length; i++) {
    for (let j = 2; j < b[i]; j++) {
      if (b[i] % j === 0) {
        a = true;
        break;
      }
      else {
        a = false;
      }
    }
    if (a == false) {
      arr.push(b[i]);
    }
  }
    return arr;
}
console.log(a(c));

Output
[ 31, 13, 97, 11 ]


5. Return all the palindromes in an array

Code
var ar = [121, 200, 313, 13, 979, 10, 202, 11];
(function isPalindrome(arr) {
  var b =[];
  var c;
  for(i=0; i<arr.length; i++) {
    var a = arr[i];
    var str = a + '';
    var c = true;
  for (j=0; j<str.length/2; j++) {
    if(str[j] !== str[str.length-1-j]) {
       c = false;
       break;
    }
  }
  if (c == true) {
    b.push(arr[i]);
  }
}
console.log(b);
})(ar);


6. Return median of two sorted arrays of same size

Code:
var arr1 = [1,12,15,26,38];
var arr2 = [2,13,17,30,45];
(function (ar1, ar2) {
    var c = ar1.concat(ar2);
    c.sort(function(a,b){return a-b});
    var d = (c.length/2) -1;
    var e = (c[d] + c[d+1]) / 2;
    console.log(e);
})(arr1,arr2);


7. Remove duplicates from an array

Code:
var res = ['guvi','geek','guvi','duplicate','geeK'];
(function(arr){
  let newArr = [];
  for(var i=0; i < arr.length; i++){
  if(newArr.indexOf(arr[i]) == -1) {
  newArr.push(arr[i]);
  } }
  console.log(newArr)
 })(res);


 8. Rotate an array by k times

Code:
var arr = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];
var k = 3;
k = arr.length % k;
(function() {
 out = arr.slice(k + 1, arr.length);
 var count = out.length;
 for (var i = 0; i < k + 1; i++) {
 out[count] = arr[i];
 count += 1;
 }
 console.log(out);})();

 --------------------------------------------------------------------

(2)

1. Write a function called “addFive”.
Given a number, “addFive” returns 5 added to that number.

Input:

addFive(5);
addFive(0);
addFive(-5);

Output:

10
5
0

Code:
var num = 10;
function addFive(num) { 
    return (num+5);
}
var result = addFive(num);
console.log(result);


2. Write a function called “getOpposite”.
Given a number, return its opposite

Input:

getOpposite(5);
getOpposite(0);
getOpposite(-5);
getOpposite(“5a”);
getOpposite(5.5);

Output:

-5
 0
 5
-1
-1

Code:
var num = 5;
function getOpposite(num) {
    if (Number.isInteger(num)){
        newNum = 0 - num;
        return newNum;
    }
    else {
        return -1
    }
}
var result = getOpposite(num)
console.log(result);


3. Fill in your code that takes a number minutes and converts it to seconds.

Examples
toSeconds(5) ➞ 300

toSeconds(3) ➞ 180

toSeconds(2) ➞ 120

Code:
var min = 5;
function toSeconds(min) {
    return num * 60;
}
var secs = toSeconds(min);
console.log(secs);


4. Create a function that takes a string and returns it as an integer.

Examples
toInteger(“6”) ➞ 6

toInteger(“1000”) ➞ 1000

toInteger(“12”) ➞ 12

Code:
var mystr = "5";
function toInteger(mystr) {
    return parseInt(mystr);
}
var myint = toInteger(mystr);
console.log(myint);


5. Create a function that takes a number as an argument, increments the number by +1 and returns the result.

Examples
nextNumber(0) ➞ 1

nextNumber(9) ➞ 10

nextNumber(-3) ➞ -2

Code:
var myint = 0;
function nextNumber(myint) {
    return (myint+1);
}
var myNextint = nextNumber(myint);
console.log(myNextint);


6. Create a function that takes an array and returns the first element.

Examples
getFirstElement([1, 2, 3]) ➞ 1

getFirstElement([80, 5, 100]) ➞ 80

getFirstElement([-500, 0, 50]) ➞ -500

Code:
var arr = [1, 2, 3];
function getFirstElement(arr) {
    return arr[0];
}
var data = getFirstElement(arr);
console.log(data);


7. Find the Perimeter of a Rectangle
Create a function that takes height and width and finds the perimeter of a rectangle.

Examples
findPerimeter(6, 7) ➞ 26

findPerimeter(20, 10) ➞ 60

findPerimeter(2, 9) ➞ 22

Code:
function findPerimeter(num1,num2) {
    return 2(l+b);
}
var peri = findPerimeter(6,7);
console.log(peri);


8. Less Than 100?
Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

Examples
lessThan100(22, 15) ➞ true
// 22 + 15 = 37

lessThan100(83, 34) ➞ false
// 83 + 34 = 117

Code:
function lessThan100(num1,num2) {
    if((num1+num2) < 100) {
        return true;
    }
    else {
        return false;
    }
}
var res = lessThan100(22,15);
console.log(res);


9. There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.

Examples
remainder(1, 3) ➞ 1

remainder(3, 4) ➞ 3

remainder(-9, 45) ➞ -9

remainder(5, 5) ➞ 0

Code:
function remainder(num1,num2) {
    return(num1%num2);
}
var res = remainder(1,3);
console.log(res);


10. Problem

Old macdonald had a farm:

MacDonald is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:

turkey = 2 legs
horse = 4 legs
pigs = 4 legs

The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.

Examples
CountAnimals(2, 3, 5) ➞ 36

CountAnimals(1, 2, 3) ➞ 22

CountAnimals(5, 2, 8) ➞ 50

Code:
function CountAnimals(tur,horse,pigs) {
    return((tur*2) + (horse*4) + (pigs*4));
}
var legs = CountAnimals(2,3,5);
console.log(legs);


11. Frames Per Second
Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.

Examples
frames(1, 1) ➞ 60

frames(10, 1) ➞ 600

frames(10, 25) ➞ 15000

Code:
function frames(num1,num2) {
    return (num1 * (num2 * 60));
}
var fps = frames(1,2);
console.log(fps);


12. Check if an Integer is Divisible By Five
Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.

Examples
divisibleByFive(5) ➞ true

divisibleByFive(-55) ➞ true

divisibleByFive(37) ➞ false

Code:
function divisibleByFive(num1) {
    if (num1 % 5 === 0) {
        return true;
    }
    else {
        return false;
    }
}
var divisible = divisibleByFive(5);
console.log(divisible);


13. Write a function called “isEven”.
Given a number, “isEven” returns whether it is even.

Input:
isEven(12);
isEven(0);
isEven(11);
isEven(“11h”);

Output:

true
true
false
-1

Code:
function isEven(num){
    if(num1%2 == 0) {
        return true;
    }
    else {
        return false;
    }
}
var even = isEven(5);
console.log(even);


14. Write a function called “areBothOdd”.
Given 2 numbers, “areBothOdd” returns whether or not both of the given numbers are odd.

Input:
areBothOdd(1, 3);
areBothOdd(1, 4);
areBothOdd(2, 3);
areBothOdd(0, 0);

Output:

true
flase
flase
flase


Code:
function areBothOdd(num1, num2){
    if(num1 % 2 !== 0 && num2 % 2 !== 0) {
        return true;
    }
    else {
        return false;
    }
}
let odd = areBothOdd(1,3);
console.log(odd);


15. Write a function called “getFullName”.
Given a first and a last name, “getFullName” returns a single string with the given first and last names separated by a single space.

Input:

getFullName(“GUVI”, “GEEK”);
getFullName(“GUVI”, );
getFullName(, “GEEK”);
getFullName(“”, “”);

Output:

“GUVI GEEK”
“GUVI”
“GEEK”
“”


Code:
function getFullName(firstName, lastName){
    return (firstName + " " + lastName);
}
var name = getFullName("GUVI","GEEK");
console.log(name);


16. Write a function called “getLengthOfWord”.
Given a word, “getLengthOfWord” returns the length of the given word.
Input:

getLengthOfWord(“GUVI”);
getLengthOfWord(“”);
getLengthOfWord();
getLengthOfWord(9);

Output:

4
0
-1
-1

Code:
function getLengthOfWord(word){
    return(word.length);
}
var a = getLengthOfWord("giraffee");
console.log(a);


17. Write a function called “isSameLength”.
Given two words, “isSameLength” returns whether the given words have the same length.
Input:
isSameLength(“GUVI”, “GEEK”);
Output:
true

Code:
function isSameLength(word1, word2){
    if(word1.length == word2.length) {
        return true;
    }
    else {
        return false;
    }
}
var a = isSameLength("GUVI","GEEK");
console.log(a);


18. Create a function to calculate the distance between two points defined by their x, y coordinates

console.log(getDistance(-1, 1, 3, 4));
function getDistance(x1, y1, x2, y2)
{
 return Math.sqrt((Math.pow((x2-x1),2)) + (Math.pow((y2-y1),2)))
}


19. Write a function called “getNthElement”.
Given an array and an integer, “getNthElement” returns the element at the given integer, within the given array. If the array has a length of 0, it should return ‘undefined’.
Input:
getNthElement([1, 3, 5], 1);
Output:
3

Code:
function getNthElement(array,n){
    return (array[n]);
}
console.log(getNthElement([1, 3, 5], 1));


20. Write a function called “getLastElement”.
Given an array, “getLastElement” returns the last element of the given array. If the given array has a length of 0, it should return ‘-1’.
Input:
getLastElement([1, 2, 3, 4]);
Output:
4

Code:
function getLastElement(array){
    if (array.length>1) {
        return (array[array.length-1]);
    }
    else{
        return -1;
    }
}
console.log(getLastElement([1,2,3,4]));


21. Write a function called “getProperty”.
Given an object and a key, “getProperty” returns the value of the property at the given key. If there is no property at the given key, it should return undefined.

var obj = {
mykey: “value”
};

Input:
getProperty(obj,’mykey’);
getProperty(obj,’dummykey’);
Output:
value
NA

Code:
let obj = {mykey : "value"};
function getProperty(obj, key) {
    return obj[key];
}
console.log(getProperty(obj, 'mykey'));


22. Write a function called “addProperty”.
Given an object and a key, “addProperty” adds a new property on the given object with a value of true.

var obj = {
}
Input:
addProperty(obj, “mykey”);

Output:

{
mykey: true
}

Code:
let obj = {};
function addProperty(obj, key) {
    return obj[key] = true;
}
let a = (addProperty(obj, 'mykey'));
console.log(obj);


23. Write a function called “removeProperty”.
Given an object and a key, “removeProperty” removes the given key from the given object.
Input:
removeProperty(obj, “name”);
Output:
undefined

Code:
let obj = {name: "value"};
function removeProperty(obj, key){
    delete obj[key];
    return obj;
}
console.log(removeProperty(obj, "name"));


24. Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

Code:
var arr1 = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
function countPositivesSumNegatives(arr) {
    let count = 0;
    let sum = 0;
    let arr2 = [];
    for (i=0; i<arr.length; i++) {
        if(Math.sign(arr[i])==1){
            count += 1;
        }
        else if(Math.sign(arr[i])==-1){
            sum += arr[i];
        }
    }
    arr2.push(count,sum);
    return arr2;
}
console.log(countPositivesSumNegatives(arr1));


25. Create a function that receives an array of numbers and returns an array containing only the positive numbers

var ar1 = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
function getPositives(ar)
{
    const arr = [];
    for(i=0; i<ar.length; i++){
    if (Math.sign(ar[i])==1) {
        arr.push(ar[i]);
    }
    }
    return arr;
}
var ar2 = getPositives(ar1);
console.log(ar2);


26. Write a function `powersOfTwo` which will return list of all powers of 2 from 0 to n (where n is an exponent).

n = 0 -> 2⁰ -> [1]

n = 1 -> 2⁰, 2¹ -> [1,2]

n = 2 -> 2⁰, 2¹, 2² -> [1,2,4]

Input:
powersOfTwo(0)
powersOfTwo(1)
powersOfTwo(2)
Output:
1
1,2
1,2,4

Code:
function powersOfTwo(n){
    let res = "";
    for (i=0; i<=n; i++){
        res += Math.pow(2,i);
        if(i<n){
            res += ",";
        }
    }
    return res;
}
console.log(powersOfTwo(2));


27. Find the maximum number in an array of numbers

function findMax(arr) {
    var large = arr[0];
    for (var i=0; i<arr.length; i++) {
        if(arr[i] > large) {
            large = +arr[i];
        }
    }
    return large;
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var max = findMax(ar);
console.log("Max:",max);


28. Print the first 100 prime numbers

Code:
printPrimes(100);// Function prints the first nPrimes numbers
function printPrimes(nPrimes)
{
 var n = 0;
 var i = 2;
 
 while(n <= nPrimes)
 {
 if (isPrime(i))
 {
 console.log(n, "-", i);
 n++;
 }
 
 i++;
 }
}// Returns true if a number is prime
function isPrime(n)
{
    for (i=2; i<n; i++) {
        if(n%i === 0) {
            return false;
            break;
        }
        else{
            return true;
        }
    }
}


29. Create a function that will return in an array the first “nPrimes” prime numbers greater than a particular number “startAt”

Code:
console.log(getPrimes(10, 100));
function getPrimes(nPrimes, startAt)
{
    var n = 1;
    var i = startAt+1;
    
    while(n <= nPrimes)
    {
    if (isPrime(i))
    {
    console.log(n, " → ", i);
    n++;
    }
    
    i++;
    }
}
function isPrime(n)
{
    for (i=2; i<n; i++) {
        if(n%i === 0) {
            return false;
            break;
        }
        else{
            return true;
        }
    }
}


30. Reverse a string

var s = reverseString("JavaScript");
console.log(s);
function reverseString(s)
{
    let sum = "";
   for(i=s.length-1; i>=0; i--) {
       sum += s[i];
   }
   return sum;
}


31. Create a function that will merge two arrays and return the result as a new array

var ar1 = [1, 2, 3];
var ar2 = [4, 5, 6];
var ar = mergeArrays(ar1, ar2);
console.log(ar);
function mergeArrays(ar1, ar2)
{
 var result = [];//this will add the first array to the result array
for(let el of ar1)
 {
 result.push(el);
 }
 for(let el of ar2)
 {
 result.push(el);
 }
 
 //Some piece of code goes here 
 
 return result;
}


32. Calculate the sum of numbers received in a comma delimited string

console.log(sumCSV("1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9"));
function sumCSV(s)
{
    var a = s.split(",");
    var sum = 0;
  for(i=0; i<a.length; i++){
      sum += +a[i];
  }
  return sum;
}

--------------------------------------------------------------------

(3) Do the below programs in arrow functions

a. Print odd numbers in an array

Code:
var arr = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
var a = ((arr) => {
 for (var i = 0; i < arr.length; i++) {
 if (arr[i] % 2 !== 0) {
 console.log(arr[i]);
 }}
});
a(arr);


b. Convert all the strings to title caps in a string array

Code:
var arr = ['guvi', 'geek', 'zen', 'fullstack'];
((arr) => {
 for (var i = 0; i < arr.length; i++) {
 console.log(arr[i][0].toUpperCase() + arr[i].substr(1));
 }
})(arr);


c. Sum of all numbers in an array

Code:
const num = [10, 20, 30, 40,50,60,70,80,90,100] 
let sum = (a, b) =>
 a + b
 sum = num.reduce(sum)
console.log(sum);


d. Return all the prime numbers in an array

Code:
const newArray=[1,3,2,5,10];
const myPrime=newArray.filter(n=>{
  if (n <= 1) {
  return false;
  }

for (let i = 2; i < n; i++) {
  if (n % i == 0)
      return false;
}

return true;
});
console.log(myPrime);


e. Return all the palindromes in an array

Code:
var ar = [121, 200, 313, 13, 979, 10, 202, 11];
var a =((arr) => {
  var b =[];
  var c;
  for(i=0; i<arr.length; i++) {
    var a = arr[i];
    var str = a + '';
    var c = true;
  for (j=0; j<str.length/2; j++) {
    if(str[j] !== str[str.length-1-j]) {
       c = false;
       break;
    }
  }
  if (c == true) {
    b.push(arr[i]);
  }
}
console.log(b);
})(ar);

-------------------------------------------------------------------