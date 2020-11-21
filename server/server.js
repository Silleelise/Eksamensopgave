const express = require("express"); //Importerer express pakke
const app = express(); //eksikverer express//Gemmer
const PORT = process.env.port || 4000; //sætter serveren til at lytte på port 4000
const user = require('../client/model/user.js"'); // henter infomation fra klassen match API

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

app.delete("/user", (req, res) => {
  res.json(user, "User has been deleted");
});

// Severen lytter på porten
app.listen(PORT, (err) => { /
  console.log(`listening on port http://localhost:${PORT}`);
});
