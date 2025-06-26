const express = require("express");
const app = express();

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});

app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

//global variables
let noun1 = "";

// get the first word
app.get("/first-word", (req, res) => {
  res.send(`<form action="/second-word" method="POST">
      <label for="noun">Give me a noun! </label>
      <input
        type="text"
        id="noun1"
        name="noun"
        placeholder="Enter your noun!"
        required
      />
      <br />
      <button id="first-word" type="submit">Insert your word!</button>
    </form>`);
});

//post the second word
app.post("/second-word", (req, res) => {
  noun1 = req.body.noun;
  res.send(`<form action="/third-word" method="POST">
    <p>${noun1}</p>
      <label for="noun">Give me a noun! </label>
      <input
        type="text"
        id="noun2"
        name="noun"
        placeholder="Enter your noun!"
        required
      />
      <br />
      <button id="second-word" type="submit">Insert your word!</button>
    </form>`);
});

//post the third word
app.post("/third-word");

//post the fourth word
app.post("/fourth-word");

//post the fifth word
app.post("/fifth-word");
