let currentPage = 1;
let per = 20;
let sear;

var header = document.createElement("div");
header.setAttribute("class","header");
header.innerHTML = "<p><b>Open Brewery DB<b></p>";
var sidenav = document.createElement("div");
sidenav.setAttribute("class","sidenav");
sidenav.innerHTML = `
<p><b>Filters<b></p>
<div class="search">
<input type="text" id="search" value="" placeholder="Search... try: dog">
<button onclick="search()"><i id="button" class="fa fa-search"></i></button>
</div><br><br>
<div class="pg">
<label for="perPage">No. of breweries to show per page:</label>
<button onclick="per_page(20)">20</button>
<button onclick="per_page(30)">30</button>
<button onclick="per_page(40)">40</button>
<button onclick="per_page(50)">50</button>
</div>`
var footer = document.createElement("div");
footer.setAttribute("class","footer");
footer.innerHTML = `
<p id="currentPage"></p>
<button type="button" onclick="previous()">Previous</button>
<button onclick="next()">Next</button>`
var section = document.createElement("section");
section.setAttribute("class", "section")
document.body.append(header,sidenav, footer, section);



function createData({name, brewery_type, street, address_2, address_3, city, state, country_province, postal_code, country, phone, website_url}) {
var container = document.createElement("div");
container.setAttribute("class", "container");
container.innerHTML = `
<p>Name: ${name}</p>
<p>Type: ${brewery_type}</p>
<p>Street: ${street}</p>
<p>Address: ${address_2, address_3}</p>
<p>City: ${city}</p>
<p>State: ${state}</p>
<p>Postal code: ${postal_code}</p>
<p>Country: ${country}<p>
<p>Phone: ${phone}</p>
<p>Website: ${website_url}`
section.appendChild(container);
}

async function per_page(num) {
    document.querySelector(".section").innerHTML = ``;
    try {
        let data = await fetch(`https://api.openbrewerydb.org/breweries?per_page=${num}`);
        let info = await data.json();
        console.log(info);
        info.forEach((brewery) => createData(brewery));
    }
    catch (error){
        console.error(error);
    }
    per = num;
}

page(1);

async function page(num) {
    document.querySelector(".section").innerHTML = ``;
    document.querySelector("#currentPage").innerHTML = `Page: ${num}`


    try {
        let data = await fetch(`https://api.openbrewerydb.org/breweries?per_page=${per}&page=${num}`);
        let info = await data.json();
        console.log(info);
        info.forEach((brewery) => createData(brewery));
    }
    catch (error){
        console.error(error);
    }
    currentPage = num;
}

async function by_type(name) {
    try {
        let data = await fetch(`"https://api.openbrewerydb.org/breweries?by_type=&{name}"`);
        let info = await data.json();
        console.log(info);
        info.forEach((brewery) => createData(brewery));
    }
    catch (error){
        console.error(error);
    }
}

async function by_postal(code) {
    try {
        let data = await fetch(`"https://api.openbrewerydb.org/breweries?by_postal=${code}"`);
        let info = await data.json();
        console.log(info);
        info.forEach((brewery) => createData(brewery));
    }
    catch (error){
        console.error(error);
    }
}

async function by_state(name) {
    try {
        let data = await fetch(`"https://api.openbrewerydb.org/breweries?by_state=${name}"`);
        let info = await data.json();
        console.log(info);
        info.forEach((brewery) => createData(brewery));
    }
    catch (error){
        console.error(error);
    }
}

async function by_name(name) {
    try {
        let data = await fetch(`"https://api.openbrewerydb.org/breweries?by_name=${name}"`);
        let info = await data.json();
        console.log(info);
        info.forEach((brewery) => createData(brewery));
    }
    catch (error){
        console.error(error);
    }
}

async function by_dist(lat,long) {
    try {
        let data = await fetch(`"https://api.openbrewerydb.org/breweries?page=${lat,long}"`);
        let info = await data.json();
        console.log(info);
        info.forEach((brewery) => createData(brewery));
    }
    catch (error){
        console.error(error);
    }
}

async function by_city(name) {
    try {
        let data = await fetch(`"https://api.openbrewerydb.org/breweries?page=${name}"`);
        let info = await data.json();
        console.log(info);
        info.forEach((brewery) => createData(brewery));
    }
    catch (error){
        console.error(error);
    }
}

async function search() {
    document.querySelector(".section").innerHTML = ``;
    var x = document.getElementById("search").value;
    sear="x";
    console.log(x);
    try {
        let data = await fetch(`https://api.openbrewerydb.org/breweries/search?query=${x}&per_page=${per}`);
        let info = await data.json();
        console.log(info);
        info.forEach((brewery) => createData(brewery));
    }
    catch (error){
        console.error(error);
    }
}

function previous() {
    let a = currentPage - 1;
    if (a<1){
        page(1);
    }
    else{
        page(a);
    }
}

function next() {
    let b = currentPage + 1;
    page(b);
}