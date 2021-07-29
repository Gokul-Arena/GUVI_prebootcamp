var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.eu/rest/v2/all");
xhr.onload = function () {
  var data = JSON.parse(this.response);
  let a = data.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.population
  },0);
  console.log(a);
};
xhr.send();