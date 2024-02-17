const express = require("express");
const cors = require("cors");
// const ethers = require("ethers");
const port = 80;

app = express();

app.post("/fileFIR", (req, res) => {
  res.send("Complain has been filed!!");
});
app.listen(port, () => {
  console.log("the server is Running");
});
