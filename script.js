class Movie {
  constructor (title, studio, rating = "PG") {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
  }

  getMovie() {
return (this.title+", "+this.studio+", "+this.rating);
}


getPG() {
  var b =[];
    if(this.rating == "PG"){
      b.push(this.title);
    }
return b;
} 
}

let arr = new Movie ("Casino Royale", "Eon Productions", "PG13");
console.log(arr.getMovie());
var mov = new Movie ('free', 'doop prod', "PG")
console.log(mov.getPG())