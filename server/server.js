/*
const express = require("express"); //Importerer express pakke
const app = express(); //eksikverer express//Gemmer
const PORT = process.env.port || 4000; //sætter serveren til at lytte på port 4000
const userClass = require('../client/model/user.js"'); // henter infomation fra klassen match API

users = [];

//Routes CRUD
app.get("/user", (req, res) => {
  res.json(user);
});

app.post("/user", (req, res) => {
  res.json(user, "User has been created");
});

app.put("/user", (req, res) => {
  res.json(user, "User has been updated");
});

app.delete("/user", (req, res) => { //sletter en bruger hvor en email matcher
  for (index = 0; index < users.length; ++index) { //For loop: går igennem hver bruger og finder email der matcher
    if (users[index].email==req.body.email){ 
      users.splice(index, 1) //hvis der er en email der matcher, vil den slette brugeren
  } res.send("delete") //fortæller at brugeren er slettet 
});


//Sign up
app.post("/signup", (req, res) => { //opretter en user med attributter fra requestet
  let newUser = new userClass.user(req.body.firstName, req.body.lastName, req.body.birthDate, req.body.gender, req.body.aboutMe, req.body.email, req.body.password)
  users.push(newUser); //tilføjer brugerne til users array
  res.send("User created") //fortæller at brugeren er oprettet 
});

//Login 
app.post("/login", (req, res) => { 
  for (index = 0; index < users.length; ++index) { //Går igennem hver bruger og finder email og password der matcher 
    if (users[index].email==req.body.email){ 
      if (users[index].password==req.body.password){ 
    }
});

// Severen lytter på porten
app.listen(PORT, (err) => { /
  console.log(`listening on port http://localhost:${PORT}`);
});
