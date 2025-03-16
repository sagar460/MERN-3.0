const express = require("express");
const connectToDatabase = require("./database");

const app = express();
connectToDatabase();

app.get("/", (req, res) => {
  res.json({
    message: "This is App Page ",
  });
});

app.get("/about", (req, res) => {
  res.status(200).json({
    message: "This is About Page only",
  });
});

app.listen(process.env.PORT, () => {
  console.log("Nodejs project has been started");
});
