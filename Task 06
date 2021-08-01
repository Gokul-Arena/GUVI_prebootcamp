(1)

Class - Movie
The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:

title, which is a String representing the title of the movie
studio, which is a String representing the studio that made the movie
rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)
a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.

b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.

d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”

***
Code:
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



(2) Convert the UML diagram to Typescript class. - use number for double

Code:
class Circle {
    radius : number = 1.0;
    color : string = "red";
    constructor(radius: number, color:string) {
        this.radius = radius;
        this.color = color;
    }

    getRadius() : number {
        return this.radius;
    }

    setRadius(radius:number) : void {
        return this.radius;
    }

    getColor () : string {
        return this.color;
    }

    setColor(color:string) : void {
        return this.color;
    }

    toString() : string {
        this.radius
    }

    getArea() : number {
        return 3.14 * this.radius *this.radius;
    }

    getCircumference() : number {
        return 2* 3.14 * this.radius;
    }
}



3. Write a person class to hold all the details.

Code:
class Person {
  constructor (name, age, gender){
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  getName() {
    return this.name;
  }

  getDetails() {
    let a = this.age+", "+this.gender;
    return (a);
  }

 }

 var gokul = new Person("gokul", "25", "male");
 console.log(gokul.getName());
 console.log(gokul.getDetails());



 4. Write a class to calculate uber price.

 Code:
class Uber {
  constructor(rideTime, rideDistance){
      this.time = rideTime;
      this.distance = rideDistance;
  }

  calculate() {
      let baseFare = 20;
      let costPerMinute = 5;
      let costPerMile = 30;
      let bookingFee = 10;
      return (baseFare+(costPerMinute*this.time)+(costPerMile*this.distance)+bookingFee);
  }
}

let ramu = new Uber(30,20);
console.log(ramu.calculate());