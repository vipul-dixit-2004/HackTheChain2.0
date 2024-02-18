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
  console.log("The server is running!!");
});
