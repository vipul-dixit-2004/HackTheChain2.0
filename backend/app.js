const Web3 = require("web3");
const Cryptr = require("cryptr");
const contractABI = [
  {
    constant: false,
    inputs: [
      {
        internalType: "string",
        name: "_complain",
        type: "string",
      },
    ],
    name: "addRecord",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "recordId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "_complain",
        type: "string",
      },
    ],
    name: "recordAdded",
    type: "event",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "uint256",
        name: "_recordId",
        type: "uint256",
      },
    ],
    name: "getComplain",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getRecord",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "recordId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
];
const contractAddress = "0x98F64EC006c43E90436bE03182aC23b673539552"; //"0x29c91ade29644C7cDDCEBBa2D54401730951D7f8"; // Replace with your deployed contract address
const web3 = new Web3("http://localhost:7545"); // Connect to your Ganache instance
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const port = 3000;
const cryptr = new Cryptr("myTotallySecretKey");
let app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const contract = new web3.eth.Contract(contractABI, contractAddress);

app.post("/getComplain", async (req, res) => {
  const recordId = req.body.recordId;
  const complain = await getRecord(recordId);
  result = decryptData(complain);
  res.status(200).json(result);
  console.log("Complain Send!");
});

app.get("/getRecordsCount", async (req, res) => {
  const nums = await getNumOfFIR();
  res.status(200).json({ count: nums });
  console.log("Count Send!");
});

app.post("/setFIR", async (req, res) => {
  const data = req.body.data;
  let encryptedData = encryptData(data);
  const accounts = await web3.eth.getAccounts();
  console.log(accounts[0]);
  await contract.methods.addRecord(encryptedData).send({ from: accounts[0] });
  res.status(200).json({ status: true });
});

app.post("/encrypt", (req, res) => {
  const data = req.body.data;
  const encryptedString = encryptData(data);
  res.status(200).json({ encrypted: encryptedString });
  console.log("Data Encrypted and Send");
});

async function getRecord(recordId) {
  let complain = await contract.methods.getComplain(recordId).call();
  return complain;
}

async function getNumOfFIR() {
  const nums = await contract.methods.getRecord().call();
  return nums;
}
function encryptData(data) {
  const encryptedString = cryptr.encrypt(data);
  return encryptedString;
}

function decryptData(data) {
  const decryptedString = cryptr.decrypt(data);
  return decryptedString;
}

app.listen(port, () => {
  console.log("the Server is up!!");
});
