import CardHolder from "../Card/CardHolder";
import "./Dashboard.css";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import Modal from "../Modal/Modal";
import axios from "axios";

export default function Dashboard() {
  const [rows, setRows] = useState(0);
  const [contract, setContract] = useState(null);
  const [complain, setComplain] = useState("No complain");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [decrypted, setDecrypted] = useState({});
  async function openModal() {
    const response = await axios.post("http://localhost:80/decrypt", {
      data: decrypted,
    });
    const actualData = JSON.parse(response.data.msg);
    setDecrypted(actualData);
    console.log(actualData);
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  };

  async function connectToMetaMask() {
    // Check if MetaMask is installed
    if (window.ethereum) {
      try {
        // Request access to MetaMask
        await window.ethereum.request({ method: "eth_requestAccounts" });
        // Create an ethers provider using MetaMask provider
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        return provider;
      } catch (error) {
        // Handle errors
        console.error("Error connecting to MetaMask:", error);
        throw error;
      }
    } else {
      // MetaMask not detected, handle accordingly
      throw new Error("MetaMask is not installed");
    }
  }

  async function makeChain() {
    try {
      // Connect to MetaMask
      const provider = await connectToMetaMask();
      const signer = provider.getSigner();

      const contractAddress = "0x947922D0C4E4e7c11BFAB575b08514824023B614";
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
      const contract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );
      return contract;
    } catch (error) {
      console.log(error);
    }
  }

  async function getRecord(contract, recordId) {
    let complain = await contract.getComplain(recordId);
    setComplain(complain);
    return complain;
  }
  async function getter() {
    const contract = await makeChain();
    const complain = await getId(contract);
  }
  async function getId(contract) {
    return await contract.getRecord();
  }

  useEffect(() => {
    makeChain().then((contract) => {
      setContract(contract);
      getId(contract).then((row) => {
        setRows(row.toNumber());
      });
    });
  }, []);

  return (
    <>
      {/* Modal for FIR display */}
      <Modal
        modalIsOpen={modalIsOpen}
        data={decrypted}
        closeModal={closeModal}
      ></Modal>

      <div className="menucontainer">
        <CardHolder
          row={rows}
          functionHandler={getRecord}
          contract={contract}
          complain={complain}
          setDecrypted={setDecrypted}
          modalFunction={openModal}
        />
      </div>
    </>
  );
}
