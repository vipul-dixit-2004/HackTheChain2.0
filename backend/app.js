const express = require("express");
const Cryptr = require("cryptr");
const cors = require("cors");

const port = 80;

let app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Function to encrypt data
const cryptr = new Cryptr("myTotallySecretKey");

// const decryptedString = cryptr.decrypt(encryptedString);

// console.log(encryptedString); // 2a3260f5ac4754b8ee3021ad413ddbc11f04138d01fe0c5889a0dd7b4a97e342a4f43bb43f3c83033626a76f7ace2479705ec7579e4c151f2e2196455be09b29bfc9055f82cdc92a1fe735825af1f75cfb9c94ad765c06a8abe9668fca5c42d45a7ec233f0
// console.log(decryptedString);

app.post("/encrypt", (req, res) => {
  const data = req.body.data;
  const encryptedString = cryptr.encrypt(data);
  res.status(200).json({ msg: encryptedString });
  console.log("Data Send");
});

app.post("/decrypt", (req, res) => {
  const data = req.body.data;
  const decryptedString = cryptr.decrypt(data);
  res.status(200).json({ msg: decryptedString });
  console.log("Data Send");
});
app.listen(port, () => {
  console.log("the server is Running");
});
