// VARIABLES =================

// var => Global/Function Scope
// let => Block Scope
// const => Block Scope and Read-Only

// var
// function printNum() {
//   for (var i = 0; i <= 3; i++) {
//     console.log(i);
//   }
//   console.log(i);
// }

// let
// function printNum() {
//   for (let i = 0; i <= 3; i++) {
//     console.log(i);
//   }
//   console.log(i);
// }

// const
// function printNum() {
//   //   if (true) {
//   //     const x = 10;
//   //   }
//   //   console.log(x);
//   const x = 10;
//   x = 15;
// }
// printNum();

// OBJECTS =================
// const person = {
//   firstName: "Guvi",
//   lastName: "Geeks",
//   getName() {
//     console.log(this);
//   },
// };

// console.log(person.firstName);
// console.log(person["firstName"]);

// const key = "lastName";
// console.log(person[key]);

// person.getName();

// Object.keys(person)
// Object.values(person);

// OBJECTS with this =================
// const person = {
//   firstName: "Guvi",
//   lastName: "Geeks",
//   getName() {
//     console.log(this);
//   },
// };

// const person2 = {
//   firstName: "Guvi 2",
//   lastName: "Geeks 2",
// };

// const name = person.getName.bind(person);
// name();

// Arrow Functions =================
// const square = function (num) {
//   return num * num;
// };

// const square = (num) => num * num;
// console.log(square(2));

// const person = {
//   firstName: "Guvi",
//   lastName: "Geeks",
//   getName() {
//     setTimeout(() => {
//       console.log(this);
//     }, 2000);
//   },
// };

// person.getName();

// Array Functions =================
// map, filter

// const students = [
//   { name: "Tamil", active: true },
//   { name: "Guvi", active: false },
// ];

// console.log(students.map((st) => "Mr." + st.name));
// console.log(students.filter((st) => st.active === true));

// Destructuring =================
// const person = {
//   firstName: "Guvi",
//   lastName: "Geeks",
// };

// Normal
// const fName = person.firstName;
// const lName = person.lastName;

// Destructuring
// const { firstName: fName, lastName: lName } = person;

// console.log(fName, lName);

// const students = [
//   { name: "Tamil", active: true },
//   { name: "Guvi", active: false },
// ];

// Normal
// const stud1 = students[0];
// const stud2 = students[1];

// Destructuring
// const [stud1, stud2] = students;
// console.log(stud1, stud2);

// Spread Operator =================
// const obj1 = { name: "Guvi", age: 7 };
// const obj2 = { age: 25, ...obj1 };
// console.log(obj2);

// const arr1 = [1, 2, 3, 4];
// const arr2 = [5, 6, ...arr1, 7, 8];
// console.log(arr2);

// function isEven(num) {
//   return new Promise((resolve, reject) => {
//     if (num % 2) reject("Odd");
//     else return resolve("Even");
//   });
// }

// async function computeEven() {
//   try {
//     let msg = await isEven(2);
//     console.log(msg);
//     msg = await isEven(3);
//     console.log(msg);
//     msg = await isEven(4);
//     console.log(msg);
//     msg = await isEven(5);
//     console.log(msg);
//   } catch (err) {
//     console.error(err);
//   }
// }

// computeEven();

// CLASS
// const person1 = {
//   firstName: "Guvi",
//   lastName: "Geeks",
//   getName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// const person2 = {
//   firstName: "Tamil",
//   lastName: "SS",
//   getName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// const person3 = {
//   firstName: "Test",
//   lastName: "TT",
//   getName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// Parent/Super Class
import Person from "./person";
import Student from "./student";
// import { Person, Student } from "./guvi";

// console.log(Guvi, test1, test2);

const person1 = new Person("Tamil", "SS");
const person2 = new Person("Guvi", "Geeks");
const person3 = new Person("Test", "TT");

console.log(person1.getName());
console.log(person2.getName());
console.log(person3.getName());

class Mentor extends Person {
  constructor(firstName, lastName, experience) {
    super(firstName, lastName);
    this.experience = experience;
  }

  getExperience() {
    return this.experience;
  }
}

const student = new Student("Tamil", "SS", "React");
console.log(student.getName());
console.log(student.getCourse());

const mentor = new Mentor("Guvi", "Geeks", 25);
console.log(mentor.getName());
console.log(mentor.getExperience());
