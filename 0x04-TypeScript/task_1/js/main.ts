interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // Allow additional dynamic attributes
}

class TeacherClass implements Teacher {
  readonly firstName: string;
  readonly lastName: string;
  readonly fullTimeEmployee: boolean;
  readonly yearsOfExperience?: number;
  readonly location: string;
  [key: string]: any;

  constructor({
    firstName,
    lastName,
    fullTimeEmployee,
    yearsOfExperience,
    location,
    ...rest
  }: Teacher) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullTimeEmployee = fullTimeEmployee;
    this.yearsOfExperience = yearsOfExperience;
    this.location = location;

    // Add any additional dynamic attributes
    Object.assign(this, rest);
  }
}
