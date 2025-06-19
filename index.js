const express = require("express");
const app = express();

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});

app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/first-word", (req, res) => {});
