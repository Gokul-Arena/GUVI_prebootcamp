//Task 1

const regionAsia = fetch("https://restcountries.eu/rest/v2/region/asia")
.then((data) => data.json());

const regionEurope = fetch("https://restcountries.eu/rest/v2/region/europe")
.then((data) => data.json())

Promise.all([regionAsia, regionEurope])
.then(countries => console.log(countries[0].concat(countries[1])));



//Task 2

const spanish = fetch("https://restcountries.eu/rest/v2/region/europe")
.then((data) => data.json())
.then(find => {
    for(i=0; i<find.length; i++){
        for(j=0; j<(find[i].languages.length); j++){
            if((find[i].languages[j].name) == "Spanish") {
                console.log(find[i]);
            }
        }
    }
});