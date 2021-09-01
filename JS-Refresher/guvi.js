export class Person {
  constructor(firstName, lastName, middleName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.middleName = middleName;
  }

  getName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

export class Student extends Person {
  constructor(firstName, lastName, course) {
    super(firstName, lastName);
    this.course = course;
  }

  getCourse() {
    return this.course;
  }
}
