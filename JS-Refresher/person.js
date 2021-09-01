class Person {
  constructor(firstName, lastName, middleName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.middleName = middleName;
  }

  getName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

export default Person;

// Named Export
// Default Export
