let person;

let header = document.createElement("div");
header.setAttribute("class", "header");
header.innerHTML = "<p><b>Nationalize API<b></p>";

let sidenav = document.createElement("div");
sidenav.setAttribute("class", "sidenav");
sidenav.innerHTML = `
<p><b>Search filter<b></p>
<div class="search">
<input type="text" id="search" value="" placeholder="Type name... (default:  Michael)">
<button onclick="search()">Search</i></button>
</div><br><br>`;

let section = document.createElement("section");
section.setAttribute("class", "section");
document.body.append(header, sidenav, section);

function createData({country_id, probability}) {
  var container = document.createElement("div");
container.setAttribute("class", "container");
container.innerHTML = `
<p>Name: ${person}</p>
<p>Country: ${country_id}</p>
<p>Probability: ${probability}</p><br><br>`;
section.appendChild(container);
}

async function getData(name) {
  document.querySelector(".section").innerHTML = ``;
  person = name;
  try {
    let data = await fetch(`https://api.nationalize.io?name=${name}`);
    let info = await data.json();
    console.log(info);
    info.country.forEach((person) => createData(person));
  }
  catch (error) {
    console.error(error);
  }
}

getData("Michael");

async function search() {
  document.querySelector(".section").innerHTML = ``;
  var x = document.getElementById("search").value;
  person = x;
try {
  let data = await fetch(`https://api.nationalize.io?name=${x}`);
    let info = await data.json();
    info.country.forEach((person) => createData(person));
}
catch (error){
  console.error(error);
}
}