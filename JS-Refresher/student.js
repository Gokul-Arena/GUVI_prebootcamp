import Person from "./person";

class Student extends Person {
  constructor(firstName, lastName, course) {
    super(firstName, lastName);
    this.course = course;
  }

  getCourse() {
    return this.course;
  }
}

export default Student;
