// opstiller variable for hver sign up form og giver dem et kaldenavn
var name1 = document.getElementById("name1");
var pw = document.getElementById("pw");
var email = document.getElementById("email");
var birthday = document.getElementById("birthday");
var genderFemale = document.getElementById("female");
var genderMale = document.getElementById("male");
var genderOther = document.getElementById("other");
var interestFemale = document.getElementById("Female");
var interestMale = document.getElementById("Male");
var interestOther = document.getElementById("Other");

// kalder localstorage og bruger set funktionen til at sætte keyword til den value
function store() {
  var gender = null;

  if (document.getElementById("male").checked) {
    gender = document.getElementById("male").value;
  }
  if (document.getElementById("female").checked) {
    gender = document.getElementById("female").value;
  }
  if (document.getElementById("other").checked) {
    gender = document.getElementById("other").value;
  }

  var interest = null;
  if (document.getElementById("Male").checked) {
    interest = document.getElementById("Male").value;
  }
  if (document.getElementById("Female").checked) {
    interest = document.getElementById("Female").value;
  }
  if (document.getElementById("Other").checked) {
    interest = document.getElementById("Other").value;
  }
  localStorage.setItem("name1", name1.value);
  localStorage.setItem("pw", pw.value);
  localStorage.setItem("email", email.value);
  localStorage.setItem("birthday", birthday.value);
  localStorage.setItem("gender", gender);
  localStorage.setItem("interest", interest);
}
