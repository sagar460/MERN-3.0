const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "This is App Page ",
  });
});

app.get("/about", (req, res) => {
  res.json({
    message: "This is About Page only",
  });
});

app.listen(2000, () => {
  console.log("Nodejs project has been started");
});
