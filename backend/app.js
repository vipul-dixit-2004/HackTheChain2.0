import Express from "express";

import { makeChain, insertRecord, getRecord } from "./web3connector.cjs";
const port = 80;

let app = Express();

app.get("/fileFIR", (req, res) => {
  let complain = "";
  makeChain().then((contract) => insertRecord(contract, complain));
  res.send("Complain has been filed!!");
});
app.listen(port, () => {
  console.log("the server is Running");
});
