(1)
*** JSON iteration over all for loops ***

const obj = [
  { person: "Name 1", age: "2", company: "GUVI" },
  { person: "Name 2", age: "5", company: "GUVI geek" },
  { person: "Name 3", age: "8", company: "GUVI geek network" }
];

//loops through a block of code a number of times
for (let i=0; i<obj.length; i++) {
  console.log(obj[i]);
}

//loops through the properties of an object
for (let a in obj) {
    console.log(obj[a]);
}

//loops through the values of an iterable object
for (let x of obj) {
    console.log(x);
}

//forEach() method calls a function once for each array element
obj.forEach(object);
function object(value) {
  console.log(value);
}

** Output **
{ person: 'Name 1', age: '2', company: 'GUVI' }
{ person: 'Name 2', age: '5', company: 'GUVI geek' }
{ person: 'Name 3', age: '8', company: 'GUVI geek network' }
{ person: 'Name 1', age: '2', company: 'GUVI' }
{ person: 'Name 2', age: '5', company: 'GUVI geek' }
{ person: 'Name 3', age: '8', company: 'GUVI geek network' }
{ person: 'Name 1', age: '2', company: 'GUVI' }
{ person: 'Name 2', age: '5', company: 'GUVI geek' }
{ person: 'Name 3', age: '8', company: 'GUVI geek network' }
{ person: 'Name 1', age: '2', company: 'GUVI' }
{ person: 'Name 2', age: '5', company: 'GUVI geek' }
{ person: 'Name 3', age: '8', company: 'GUVI geek network' }



(2) & (3)
*** Restcountries API to display countries name, region, subregion, population, flag ***

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.eu/rest/v2/all");
xhr.onload = function () {
  var data = JSON.parse(this.response);
  for (i=0; i<data.length; i++) {
      console.log(data[i].name);
      console.log(data[i].region);
      console.log(data[i].subregion);
      console.log(data[i].population);
      console.log(data[i].flag);
  }
};
xhr.send();
