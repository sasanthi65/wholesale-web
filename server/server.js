const express = require("express");
const colors = require("colors");

// rest object
const app = express();

// rest api
app.get("/", (req, res) => {
  res.send({
    message: "Welcome to server side",
  });
});

//port
const PORT = 8080;

// run app
app.listen(PORT, () => {
  console.log(`Server is running ${PORT}`.bgCyan.white);
});
