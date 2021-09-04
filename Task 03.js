(1)

*** JSON Resume *** (object of objects)

{
"basics" : {
"name" : "Gokul V",
"email" : "gokul.26.12.1995@gmail.com",
"phone" : "9962768068",
"location" : {
"address" : "No.3, 3rd Cross Street, Thirumal Nagar West Extension, Poonamallee",
"city" : "Chennai",
"postal code" : "600056",
"state" : "Tamil Nadu"
}
},
"education" : {
"education1" : {
"degree" : "M.E.",
"Major" : "Avionics",
"startYear" : "2013",
"endYear" : "2017"
"cgpa" : "6.5"
},
"education2" : {
"degree" : "B.E.",
"Major" : "Aeronautical Engineering",
"startYear" : "2018",
"endYear" : "2020",
"cgpa" : "8.0"
}
}
"work" : {
"work1" : {
"jobTitle" : "Engineering Intern",
"companyName" : "Virginia Tech",
"location" : "Maduravoyal"
"startDate" : "October 2020",
"endDate" : "May 2021",
"workExperience" : "8 months"
},
"work2" : {
"jobTitle" : "Engineering Intern",
"companyName" : "UCAL Fuel Systems",
"location" : "Chengalpattu"
"startDate" : "August 2019",
"endDate" : "August 2019",
"workExperience" : "1 month"
}
}
"technicalSkills" : {
"programming" : "C, C++, Python",
"software" : "Mission Panner"
},
"projects" : {
"ugProject" : {
"title" : “Development of flight controller for the autonomous navigation of Unmanned Aerial
Vehicle using STM32 micro-controller”,
"description" : "The task of the UAV is to operate normally and
execute its basic functions. I t is necessary to have a group of devices acting together in
an independent and integrated manner. Commercially available flight controllers do
not allow customization. Hence there is a need to create a open hardware architecture
to change the characteristics of the controller according to the user requirements . The
aim of the project is to create a flight controller using STM32 micro-controller for
autonomous operations. It uses PID control algorithm that acts as a control loop
feedback mechanism."
},
"pgProject" : {
"title" : “Determination of fuel characteristics with combination of
kerosene and Aluminium oxide”,
"description" : "The project discusses on fuel burn rate, ignition time delays at various
temperatures and the values are gathered by using the camera and analysed"
}
}
"extraCurricularActivities" : {
"1" : "Participated on Symposium conducted by MIT and have won second place on parachute
designing",
"2" : "Participated on a competition with arduino based voice recognition project",
"3" : "Participated Workshops on Vibration, Arduino, Image Processing and Robotics"
}
}



(2)

Comparing Two Objects having same properties without order

var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };

var flag=true;

if(Object.keys(obj1).length==Object.keys(obj2).length){
    for(key in obj1) { 
        if(obj1[key] == obj2[key]) {
            continue;
        }
        else {
            flag=false;
            break;
        }
    }
}
else {
    flag=false;
}
console.log(flag);





*** Task 1: Simple Programs todo for variables ***

1. Declare four variables without assigning values and print them in console.

Code:
let a, b, c, d;
console.log(a,b,c,d);

Output:
undefined undefined undefined undefined



2. How to get value of the variable myvar as output.

Code:
var myvar = 1;
console.log(myvar);

Output:
1



3. Declare variables to store your first name, last name, marital status, country and age in multiple lines.

Code:
let firstName;
let lastName;
let maritalStatus;
let country;
let age;



4. Declare variables to store your first name, last name, marital status, country and age in a single line.

Code:
let firstName, lastName, maritalStatus, country, age;



5. Declare variables and assign string, boolean, undefined and null data types.

Code:
let str = "GUVI"; //string
let bool = true; //boolean
let undef = undefined; //undefined
let nul = null; //null



6. Convert the string to integer.

Code:
let a = "Zen"; //string

let b = parseInt(a);
let c = Number(a);
let d = +(a);

console.log(typeof(a), typeof(b), typeof(c), typeof(d));

Output:
string number number number



7. Write 6 statement which provide truthy & falsey values.

Code:
let a, b, c, d, e, f;

a = (1 == true); // true
b = (0 === true); //false
c = (null == undefined); //true
d = (null === undefined); // false
e = (true == true); //true
f = (true == false); //false

console.log(a, b, c, d, e, f);

Output:
true false true false true false



*** Task 2: Simple Programs todo for Operators ***

1. Square of a number.

Code:
let a = 9;
let b = a*a;
console.log(b);

Output:
81



2. Swapping 2 numbers

Code:
let a = 10;
let b = 20;
let temp;
temp = a;
a = b;
b = temp;
console.log(a, b);

Output:
20 10   // Initially a is 10, b is 20. But after swapping a is 20, b is 10



3. Addition of 3 numbers

Code:
let a=10; b=20; c=30;
let d;
d = a+b+c;
console.log(d);

Output:
60



4. Celsius to Fahrenheit Conversion

Code:
let celsius = 25;
let fahrenheit;
fahrenheit = (celsius * (9/5)) + 32;
console.log(fahrenheit);

Output:
77



5. Meter to miles

Code:
let meter = 25;
let miles;
miles = meter/1609.344;
console.log(miles.toFixed(5));

Output:
0.01553



6. Pounds to kg

Code:
let pound = 25;
let kg;
kg = pound * 0.45359237;
console.log(kg.toFixed(5));

Output:
11.33981



7. Calculate Batting Average

Code:
let scoredRuns = 25;
let timesOut = 3;
let battingAverage = scoredRuns / timesOut;
console.log(battingAverage);

Output:
8.333333333333334



8. Calculate five test scores and print their average

Code:
let t1=60, t2=70, t3=80, t4=90, t5=100;
let n = 5;
let average = (t1+t2+t3+t4+t5) / n;
console.log(average);

Output:
80



9. Power of any number x ^ y

Code:
let a = 8;
let b = 2;
let c = Math.pow(a,b);
console.log(c);

Output:
64



10. Calculate Simple Interest

Code:
let p = 4000; //principal
let r = 12;   //rate of interest
let t = 3;  //time
let si = (p*r*t) / 100;
console.log(si);

Output:
1440



11. Calculate area of an equilateral triangle

Code:
let a = 7; //side
let area = (Math.sqrt(3)/4) * (a*a);
console.log(area);

Output:
21.21762



12. Area Of Isosceles Triangle

Code:
let b = 10;  //base
let h = 17;  //height
let area = (1/2) * b * h;
console.log(area);

Output:
85



13. Volume Of Sphere

Code:
let r = 3; //radius
let volume = (4/3) * Math.PI * Math.pow(r, 3);
console.log(volume.toFixed(5));

Output:
113.09734



14. Volume Of Prism

Code:
let b = 25; //baseArea
let l = 12; //length
let volume = b * l;
console.log(volume);

Output:
300



15. Find area of a triangle.

Code:
let b = 4; //baseArea
let h = 2; //length
let area = (1/2) * b * h;
console.log(area);

Output:
4



16. Give the Actual cost and Sold cost, Calculate Discount Of Product

Code:
let actualCost = 120;
let soldCost = 90;
let discount = ((actualCost-soldCost)/actualCost) * 100;
console.log(discount);

Output:
25



17. Given their radius of a circle and find its diameter, circumference and area.

Code:
let r = 28; //radius
let d = 2 * r; //diameter
let c = 2 * Math.PI * r; //circumference
console.log("Diameter = " + d, ",", "Circumference = " + c);

Output:
Diameter = 56 , Circumference = 175.92918860102841



18. Given two numbers and perform all arithmetic operations.

Code:
let a = 22;
let b = 10;
let add = a+b;
let sub = a-b;
let mul = a*b;
let exp = a**b;
let div = a/b;
let mod =a%b;
let incr = a++;
let decr = b--;
console.log(add, sub, mul, exp, div, mod, incr, decr);

Output:
32 12 220 26559922791424 2.2 2 22 10



19. Display the asterisk pattern as shown below (No loop needed).
*****
*****
*****
*****
*****

Code:
console.log("","*****",'\n',"*****",'\n',"*****",'\n',"*****",'\n',"*****");

Output:
 ***** 
 ***** 
 ***** 
 ***** 
 *****
 
 
 
 20. Calculate electricity bill?
 For example, a consumer consumes 100 watts per hour daily for one month. Calculate the total energy bill of that consumer if per unit rate is 10?

 
 Code:
 let MonthsinHrs = 24 * 30; //assuming 30 days in a month (hrs.)
 let energyConsumption1hour = 100; //Watts
 let energyConsumption1month = (MonthsinHrs * energyConsumption1hour)/1000; //KiloWatt Hr.
 let unit = 10;
 let bill = energyConsumption1month * unit;
 console.log(bill);
 
 Output:
 720
 
 
 
 21. Program To Calculate CGPA
 
 Code:
let subject1 = 9; //grade points
let subject2 = 8;
let subject3 = 7;
let subject4 = 6;
let subject5 = 8;
let cgpa = ((subject1 + subject2 + subject3 + subject4 + subject5)/5);
console.log(cgpa);

Output:
7.6



22. Write a loop that makes seven calls to console.log to output the following triangle:

Code:
let sum = "";
for (i=0; i<7; i++) {
    sum += "#";
    console.log(sum);
}



23. Iterate through the string array and print its contents

Code:
var strArray= ["<option>Jazz</option>",
,"<option>Blues</option>",
,"<option>New Age</option>",
,"<option>Classical</option>",
,"<option>Opera</option>"];

for (i=0; i<strArray.length; i++) {
    console.log(strArray[i]);
}



24. Write a code to count the elements in the array . Don’t use length property. Declare an empty array;


Code:
var myarray=[11,22,33,44,55];
var a = [];
var count = 0;
for(let x in myarray) {
    a.push(myarray);
    count++;
}
console.log(count);



25. Create an array called foods holds the names of your top 20 favorite foods, starting with the best food. Foods variable holds the names of your top 20 favorite foods, starting with the best food.
How can you find your fifth favorite food? Find the length of your foods array.

Code:
let foods = [ 'briyani', 'idli', 'dosai', 'pongal', 'poori', 'vadai', 'parotta', 'fried rice', 'upma', 'idiyappam', 'sambar',
'rasam', 'curd', 'chapathi', 'noodles', 'kesari', 'laddu', 'poli', 'gulab jamun', 'rasagulla'];
console.log(foods[4]);
console.log(foods.length);



26. Starting from the existing friends variable below, change the element that is currently “Mari” to “Munnabai”.

Code:
var friends = [
  'Mari',
  'MaryJane',
  'CaptianAmerica',
  'Munnabai',
  'Jeff',
  'AAK chandran'
  ];
  function dataHandling(input){
  for (var i = 0; i < 1; i++) {
  let temp = friends[i];
  friends[i] = friends[i+3];
  friends[i+3] = temp;
  }
  console.log(input);
  }
  dataHandling(friends);



27. Starting from the friends variable below, Loop and Print the names till you meet CaptianAmerica.

Code:
const friends = [
  'Mari',
  'MaryJane',
  'CaptianAmerica',
  'Munnabai',
  'Jeff',
  'AAK chandran'
];
function dataHandling(input){
for (var i = 0; i < 3; i++) {
console.log(friends[i]);
}
}
dataHandling(friends);


28. Find the person is ur friend or not.

Code:
var friends = [
  'Mari',
  'MaryJane',
  'CaptianAmerica',
  'Munnabai',
  'Jeff',
  'AAK chandran'
];
function dataHandling(input, name){
    if (input.includes(name)) {
        return "friend";
    }
    else{
      return "not friend";
    }
}
let found = dataHandling(friends,'Jeff');
console.log(found);


29. We have two lists of friends below. Use array methods to combine them into one alphabetically-sorted list.

Code:
var friends1 = [
  'Mari',
  'MaryJane',
  'CaptianAmerica',
  'Munnabai',
  'Jeff',
  'AAK chandran'
  ];
  var friends2 = [
  'Gabbar',
  'Rajinikanth',
  'Mass',
  'Spiderman',
  'Jeff',
  'ET'
  ];
  function dataHandling(input1, input2){
  var a = input1.concat(input2);
  a.sort();
  console.log(a);
  }
  dataHandling(friends1, friends2);


  30. Get the first item, the middle item and the last item of the array


  Code:
var arr = [
  "AAK chandran",
  "CaptianAmerica",
  "ET",
  "Gabbar",
  "Jeff",
  "Jeff",
  "Mari",
  "MaryJane",
  "Mass",
  "Munnabai",
  "Rajinikanth",
  "Spiderman"
];
console.log(arr[0]);
console.log(arr[arr.length-1]);
if(arr.length % 2 !== 0) {
  console.log(arr[parseInt((arr.length/2)-1)]);
}
else{
  console.log(arr[(arr.length/2)-1]+", "+ arr[((arr.length/2)-1)+1]);
}


31. Add your name to the end of the friends array, and add another name to beginning.

Code:
var arr = [
  "AAK chandran",
  "CaptianAmerica",
  "ET",
  "Gabbar",
  "Jeff",
  "Jeff",
  "Mari",
  "MaryJane",
  "Mass",
  "Munnabai",
  "Rajinikanth",
  "Spiderman"
];
arr.push("Gokul");
console.log(arr);


32. Add Mr or Ms to the names in the friends array.


Code:
var arr = [
  "AAK chandran",
  "CaptianAmerica",
  "ET",
  "Gabbar",
  "Jeff",
  "Jeff",
  "Mari",
  "MaryJane",
  "Mass",
  "Munnabai",
  "Rajinikanth",
  "Spiderman"
];
var sum = "";
var b =[];
for (let a in arr) {
  b.push("Mr "+arr[a]);
}
console.log(b);


33.  Concat all the names the friends array and return as comma “,” seperated string.

Code:
var arr = [
  "AAK chandran",
  "CaptianAmerica",
  "ET",
  "Gabbar",
  "Jeff",
  "Jeff",
  "Mari",
  "MaryJane",
  "Mass",
  "Munnabai",
  "Rajinikanth",
  "Spiderman"
];
var sum = "";
var b =[];
for (let a in arr) {
  sum += arr[a];
  if(a<arr.length-1){
    sum+=", ";
  }
}
console.log((sum));


34. Find the friends names who has letter ‘a’ and return the list.

Code:
var arr = [
  "AAK chandran",
  "CaptianAmerica",
  "ET",
  "Gabbar",
  "Jeff",
  "Jeff",
  "Mari",
  "MaryJane",
  "Mass",
  "Munnabai",
  "Rajinikanth",
  "Spiderman"
];
var sum = "";
var b =[];
for (let a in arr) {
  if(arr[a].includes("a")){
    b.push(arr[a]);
  }
}
console.log((b));


35. Find the avg length of all the friends names. Get the individual length of the names and do the avg.

Code:
var arr = [
  "AAK chandran",
  "CaptianAmerica",
  "ET",
  "Gabbar",
  "Jeff",
  "Jeff",
  "Mari",
  "MaryJane",
  "Mass",
  "Munnabai",
  "Rajinikanth",
  "Spiderman"
];
var sum = 0;
for (let a in arr) {
    var b = arr[a].length;
    sum += b;
}
console.log(sum/arr.length);


36. Find the names and return the list starting with letter M

Code:
var arr = [
  "AAK chandran",
  "CaptianAmerica",
  "ET",
  "Gabbar",
  "Jeff",
  "Jeff",
  "Mari",
  "MaryJane",
  "Mass",
  "Munnabai",
  "Rajinikanth",
  "Spiderman"
];
var sum = "";
var b =[];
for (let a in arr) {
  if(arr[a][0] == ("M")){
    console.log(arr[a]);
  }
}


37. Find the name with max characters and return the name.

Code:
var arr = [
  "AAK chandran",
  "CaptianAmerica",
  "ET",
  "Gabbar",
  "Jeff",
  "Jeff",
  "Mari",
  "MaryJane",
  "Mass",
  "Munnabai",
  "Rajinikanth",
  "Spiderman"
];
var sum = 0;
var large = arr[0];
for (let a in arr) {
    if (arr[a].length > large.length){
        large = arr[a];
    }
}
console.log(large);


38. Find the name with min characters and return the name.

Code:
var arr = [
  "AAK chandran",
  "CaptianAmerica",
  "ET",
  "Gabbar",
  "Jeff",
  "Jeff",
  "Mari",
  "MaryJane",
  "Mass",
  "Munnabai",
  "Rajinikanth",
  "Spiderman"
];
var small = arr[0];
for (let a in arr) {
    if (arr[a].length < small.length){
        small = arr[a];
    }
}
console.log(small);


39. Find the average in the array below.
Make sure you add only the numbers and do avg.

Code:
const friendsInfo = [6, 12, 'Mari', 1, true, 'Munnabai', '200', 'CaptianAmerica', 8, 10];
var sum = 0;
var count=0;
for(let i in friendsInfo){
    if (typeof(friendsInfo[i]) == 'number') {
        count++;
        sum+=friendsInfo[i];
    }
}
console.log(sum/count);


40. Print the contents of the input variable.

Code:
var input = [
  ['0001', 'Roman Alamsyah','Bandar Lampung', '21/05/1989', 'Membaca'],
  ['0002', 'Dika Sembiring', 'Medan', '10/10/1992', 'Bermain Gitar'],
  ['0003', 'Winona', 'Ambon', '25/12/1965', 'Memasak'],
  ['0004', 'Bintang Senjaya', 'Martapura', '6/4/1970', 'Berkebun']
  ]
  function dataHandling(input){
  for (var i = 0; i < input.length; i++) {
      var a = input[i];
      for(var j = 0; j< a.length; j++){
          console.log(a[j]);
      }
  }
  }
  dataHandling(input);


Objects:

41. What is the output?

Code:
myobject = {1:"one",'11':1,'name':'arun'}
console.log(myobject['11']); 
console.log(myobject.name);

Output:
1
arun


42. Add a new key value pair to myobject.
key : ten
value : ten

Code:
myobject = {1:'one','11':1,'name':'arun'}
myobject.ten = "ten";
console.log(myobject);

Output:
{"1":"one","11":1,"name":"arun","ten":"ten"} // Quotes might not get displayed that fine.


43. Write out an object literal to represent the data below.
Guvi, Geek, 6, IIT-M RP,Chennai.

Code:
function company(firstName, lastName, No, Address, City){
  console.log({
      firstName,
      lastName,
      No,
      Address,
      City
  })
}
company('Guvi', 'Geek', '6', 'IIT-M RP','Chennai');


44. How would you represent the following data using a combination of object literals and arrays? (You can describe a strategy without typing or writing out the whole thing.)
Guvi, Geek, 6, IIT-M RP,Chennai.
Amazon, Inc, 31, SP Infocity, Chennai.
Google, Alphabet, 34 Amphitheater Parkway, MountainView.
Tesla, Inc , 32, 333 Santana Row,San Jose.

Code:
let a = "name";
var i = 0;

const firstName = {
    [a + ++i]: "..",
        "    :   "
}

const lastName ={
    ":"
}

const No = {

}

const Address = {

}

const city = {

}

console.log(firstName.a1);   // accessing