class user {
  constructor(
    firstName,
    lastName,
    birthDate,
    gender,
    aboutMe,
    email,
    password
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = birthDate;
    this.gender = gender;
    this.aboutMe = aboutMe;
    this.email = email;
    this.password = password;
  }
}

function calculateAge(birthYear) {
  return 2020 - birthYear;
}

module.exports = user;
