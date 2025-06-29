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
let noun2 = "";
let verb1 = "";
let adjective1 = "";
let noun3 = "";

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
app.post("/third-word", (req, res) => {
  noun2 = req.body.noun;
  res.send(`<form action="/fourth-word" method="POST">
      <p>${noun2}<p>
      <label for="verb">Give me a verb! </label>
      <input
        type="text"
        id="verb1"
        name="verb"
        placeholder="Enter your verb!"
        required
      />
      <br />
      <button id="third-word" type="submit">Insert your word!</button>
    </form>`);
});

//post the fourth word
app.post("/fourth-word", (req, res) => {
  verb1 = req.body.verb;
  res.send(`<form action="/fifth-word" method="POST">
      <p>${verb1}<p>
      <label for="adjective">Give me an adjective! </label>
      <input
        type="text"
        id="adjective1"
        name="adjective"
        placeholder="Enter your adjective!"
        required
      />
      <br />
      <button id="fourth-word" type="submit">Insert your word!</button>
    </form>`);
});

//post the fifth word
app.post("/fifth-word", (req, res) => {
  adjective1 = req.body.adjective;
  res.send(`<form action="/story" method="POST">
    <p>${adjective1}<p>
      <label for="noun">Give me a noun! </label>
      <input
        type="text"
        id="noun3"
        name="noun"
        placeholder="Enter your noun!"
        required
      />
      <br />
      <button id="fifth-word" type="submit">Insert your word!</button>
    </form>`);
});

//post the final story using all 5 words
app.post("/story", (req, res) => {
  noun3 = req.body.noun;
  res.redirect("/story");
});

app.get("/story", (req, res) => {
  res.send(
    `<p>The ${noun1} and the ${noun2} ${verb1} ${adjective1} through the ${noun3}.</p><a href="/first-word">Play Again</a>`,
    (noun1 = ""),
    (noun2 = ""),
    (noun3 = ""),
    (verb1 = ""),
    (adjective1 = "")
  );
});
