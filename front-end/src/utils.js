import { ethers } from "ethers";

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

export async function makeChain() {
  try {
    // Connect to MetaMask
    const provider = await connectToMetaMask();
    const signer = provider.getSigner();

    const contractAddress = "0x03A0fa2c2b499d27f4575F4eE53cbBEd28CFf4Ab";
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
    const contract = new ethers.Contract(contractAddress, contractABI, signer);
    return contract;
  } catch (error) {
    console.log(error);
  }
}

export async function insertRecord(contract, complain) {
  try {
    const inject = await contract.addRecord(complain);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}
export async function getRecord(contract, recordId) {
  let complain = await contract.getComplain(recordId);
  return complain;
}
