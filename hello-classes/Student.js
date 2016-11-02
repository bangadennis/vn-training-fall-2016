class Person {
  constructor(name = "No name available") {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

class Student extends Person {
  constructor(name, enrollments) {
    super( name );
    this.enrollment = enrollments;
  }

  getEnrollments() {
    return this.enrollment;
  }
}

export default Student;
export {
  Person,
  Student
}
