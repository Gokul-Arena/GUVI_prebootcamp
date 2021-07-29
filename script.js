var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.eu/rest/v2/all");
xhr.onload = function () {
  var data = JSON.parse(this.response);
  function region(a) {
    if (a.currencies[0].code =="USD") {
      console.log(a.name);
    }
  }
  data.filter(region);
};
xhr.send();