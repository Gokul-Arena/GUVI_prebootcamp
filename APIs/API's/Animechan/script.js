let pagee = 1;
let title;
let namee;

var header = document.createElement("div");
header.setAttribute("class","header");
header.innerHTML = "<p><b>Animechan API<b></p>";
var sidenav = document.createElement("div");
sidenav.setAttribute("class","sidenav");
sidenav.innerHTML = `
<p><b>Filters<b></p>
<div class="search">
<input type="text" id="title" value="" placeholder="Get by anime title">
<button onclick="by_title()"><i id="button" class="fa fa-search"></i></button><br><br>
<input type="text" id="name" value="" placeholder="Get by character name">
<button onclick="by_name()"><i id="button" class="fa fa-search"></i></button>
</div><br><br>
<div class="pg">
<button onclick="page()">Get a random quote</button><br><br>
<button onclick="per_page()">Get 10 random quotes</button><br><br>
<button onclick="availableAnime()">Get all available anime</button>
</div>`
var section = document.createElement("section");
section.setAttribute("class", "section")
document.body.append(header,sidenav, section);



function createData(user) {
var container = document.createElement("div");
container.setAttribute("class", "container");
container.innerHTML = `
<p>Anime: ${user.anime}</p>
<p>Character: ${user.character}</p>
<p>Quote: ${user.quote}</p>`
section.appendChild(container);
}

function createQuotes({anime, character, quote}) {
    var container = document.createElement("div");
    container.setAttribute("class", "container");
    container.innerHTML = `
    <p>Anime: ${anime}</p>
    <p>Character: ${character}</p>
    <p>Quote: ${quote}</p>`
    section.appendChild(container);
    }

    function createCharacter(anime) {
        var container = document.createElement("div");
        container.setAttribute("class", "container");
        container.innerHTML = `
        <p>Anime: ${anime}</p>`
        section.appendChild(container);
        }

async function per_page() {
    document.querySelector(".section").innerHTML = ``;
    try {
        let data = await fetch(`https://animechan.vercel.app/api/quotes`);
        let info = await data.json();
        console.log(info);
        info.forEach((brewery) => createQuotes(brewery));
    }
    catch (error){
        console.error(error);
    }
}

per_page();

async function page() {
    document.querySelector(".section").innerHTML = ``;
    try {
        let data = await fetch(`https://animechan.vercel.app/api/random`);
        let info = await data.json();
        console.log(info);
        createData(info);
    }
    catch (error){
        console.error(error);
    }
}

async function availableAnime() {
    document.querySelector(".section").innerHTML = ``;
    try {
        let data = await fetch(`https://animechan.vercel.app/api/available/anime`);
        let info = await data.json();
        console.log(info);
        info.forEach((brewery) => createCharacter(brewery));
    }
    catch (error){
        console.error(error);
    }
}

async function by_name() {
    document.querySelector(".section").innerHTML = ``;
    var y = document.getElementById("name").value;
    namee=y;
    try {
        let data = await fetch(`https://animechan.vercel.app/api/quotes/character?name=${namee}`);
        let info = await data.json();
        console.log(info);
        info.forEach((brewery) => createQuotes(brewery));
    }
    catch (error){
        console.error(error);
    }
}

async function by_title() {
    document.querySelector(".section").innerHTML = ``;
    var x = document.getElementById("title").value;
    title=x;
    console.log(title);
    try {
        let data = await fetch(`https://animechan.vercel.app/api/quotes/anime?title=${title}`);
        let info = await data.json();
        console.log(info);
        info.forEach((brewery) => createQuotes(brewery));
    }
    catch (error){
        console.error(error);
    }
}