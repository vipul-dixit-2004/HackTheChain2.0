import "./NewFIR.css";
import { useState } from "react";
import axios from "axios";
import { ethers } from "ethers";

export default function NewFIR() {
  const [suspectCheck, setSuspectcheck] = useState(false);
  const [doubleCheck, setDoubleCheck] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

  async function submitForm() {
    const inputclass = document.getElementsByClassName("inputclass");

    const object = {};
    for (let i = 0; i < inputclass.length; i++) {
      object[i] = inputclass[i].value;
    }
    const response = await axios.post("http://localhost:3000/encrypt", {
      data: JSON.stringify(object),
    });
    console.log(response);
    let encryptedData = response.data.encrypted;
    const contract = await makeChain();
    setLoading(true);
    let status = await insertRecord(contract, encryptedData);
    if (response.status) {
      setLoading(false);
      setError(true);
    }
    console.log(encryptedData);
  }
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

      const contractAddress = "0x98F64EC006c43E90436bE03182aC23b673539552"; // "0x29c91ade29644C7cDDCEBBa2D54401730951D7f8";
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

  async function insertRecord(contract, complain) {
    try {
      const inject = await contract.addRecord(complain);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  return (
    <>
      {isLoading ? (
        <>
          <h1>Loading....</h1>
        </>
      ) : (
        <div className="formHolder">
          <div className="main" id="main">
            <form>
              <h1>First Investigation Report</h1>
              <div id="informerdetails" className="outerdetailsbox">
                <h2>Informer Details</h2>
                <div className="innerdetailsbox">
                  <div className="detailsbox">
                    <label htmlFor="informername">Name</label>
                    <div id="fullname">
                      <input
                        type="text"
                        id="informername"
                        placeholder="First Name"
                        className="inputclass"
                        required
                      />
                      <input
                        type="text"
                        id="informerlastname"
                        placeholder="Last Name"
                        className="inputclass"
                      />
                    </div>
                  </div>
                  <div className="detailsbox">
                    <label htmlFor="informerphone">Phone</label>
                    <input
                      type="tel"
                      id="informerphone"
                      placeholder="Phone"
                      maxLength="10"
                      className="inputclass"
                      required
                    />
                  </div>
                  <div className="detailsbox">
                    <label htmlFor="informeremail">Email</label>
                    <input
                      type="email"
                      id="informeremail"
                      placeholder="Email"
                      className="inputclass"
                      required
                    />
                  </div>
                  <div className="detailsbox">
                    <label htmlFor="informeraddress">Address</label>
                    <input
                      type="text"
                      id="informeraddress"
                      placeholder="Address"
                      className="inputclass"
                      required
                    />
                  </div>
                  <div className="detailsbox">
                    <label htmlFor="informeradhaar">Adhaar Number</label>
                    <input
                      type="text"
                      id="informeradhaar"
                      placeholder="Adhaar Number"
                      maxLength="12"
                      className="inputclass"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="checkbox">
                <input
                  type="checkbox"
                  onChange={() => {
                    setSuspectcheck(!suspectCheck);
                  }}
                  id="suspectcheck"
                  className="inputclass"
                />
                <label htmlFor="suspectcheck">Do you have a suspect</label>
              </div>
              {suspectCheck && (
                <div id="suspectdetails" className="outerdetailsbox">
                  <h2>Suspect Details</h2>
                  <div className="innerdetailsbox">
                    <div className="detailsbox">
                      <label htmlFor="suspectname">Name</label>
                      <div id="fullname">
                        <input
                          type="text"
                          id="suspectname"
                          placeholder="First Name"
                          className="inputclass"
                        />
                        <input
                          type="text"
                          id="suspectlastname"
                          placeholder="Last Name"
                          className="inputclass"
                        />
                      </div>
                    </div>
                    <div className="detailsbox">
                      <label htmlFor="suspectaddress">Address</label>
                      <input
                        type="text"
                        id="suspectaddress"
                        placeholder="Address"
                        className="inputclass"
                      />
                    </div>
                    <div className="detailsbox">
                      <label htmlFor="suspectothers">Others</label>
                      <input
                        type="text"
                        id="suspectothers"
                        placeholder="Eg. Phone, Desciption etc"
                        className="inputclass"
                      />
                    </div>
                  </div>
                </div>
              )}
              <div id="crimedetails" className="outerdetailsbox">
                <h2>Crime Details</h2>
                <div className="innerdetailsbox">
                  <div className="detailsbox">
                    <label htmlFor="crimetype">Type of Crime</label>
                    <input
                      type="text"
                      id="crimetype"
                      placeholder="Type of Crime"
                      className="inputclass"
                      required
                    />
                  </div>
                  <div className="detailsbox">
                    <label htmlFor="crimedate">Date of Crime</label>
                    <input
                      type="date"
                      id="crimedate"
                      className="inputclass"
                      required
                    />
                  </div>
                  <div className="detailsbox">
                    <label htmlFor="crimetime">Time of Crime</label>
                    <input
                      type="time"
                      id="crimetime"
                      className="inputclass"
                      required
                    />
                  </div>
                  <div className="detailsbox">
                    <label htmlFor="crimeplace">Place of Crime</label>
                    <input
                      type="text"
                      id="crimeplace"
                      placeholder="Place of Crime"
                      className="inputclass"
                      required
                    />
                  </div>
                  <div className="detailsbox">
                    <label htmlFor="crimedescription">Description</label>
                    <textarea
                      type="text"
                      id="crimedescription"
                      placeholder="Description"
                      className="inputclass"
                      required
                    ></textarea>
                  </div>
                  <div className="detailsbox">
                    <label htmlFor="Section">Section</label>
                    <input
                      type="text"
                      id="Section"
                      placeholder="Section"
                      className="inputclass"
                      required
                    />
                  </div>
                  <div className="detailsbox">
                    <label htmlFor="distance">
                      Distance from Police station
                    </label>
                    <input
                      type="text"
                      id="distance"
                      placeholder="Distance from Police station"
                      className="inputclass"
                      required
                    />
                  </div>
                  <div className="detailsbox">
                    <label htmlFor="Others">Others</label>
                    <textarea
                      type="text"
                      id="Others"
                      placeholder="Other Details"
                      className="inputclass"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div id="stationdetails" className="outerdetailsbox">
                <h2>Station Details</h2>
                <div className="innerdetailsbox">
                  <div className="detailsbox">
                    <label htmlFor="stationname">Name</label>
                    <input
                      type="text"
                      id="stationname"
                      placeholder="Station Name"
                      className="inputclass"
                      required
                    />
                  </div>
                  <div className="detailsbox">
                    <label htmlFor="stationnumber">Station Number</label>
                    <input
                      type="text"
                      id="stationnumber"
                      placeholder="Station Number"
                      className="inputclass"
                      required
                    />
                  </div>
                  <div className="detailsbox">
                    <label htmlFor="stationaddress">Address</label>
                    <input
                      type="text"
                      id="stationaddress"
                      placeholder="Station Address"
                      className="inputclass"
                      required
                    />
                  </div>
                  <div className="detailsbox">
                    <label htmlFor="stationphone">Phone</label>
                    <input
                      type="tel"
                      id="stationphone"
                      maxLength={10}
                      placeholder="Station Phone"
                      className="inputclass"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="checkbox">
                <input
                  type="checkbox"
                  id="declaration"
                  onChange={() => {
                    setDoubleCheck(!doubleCheck);
                  }}
                  className="inputclass"
                />
                <label htmlFor="declaration">
                  I hereby declare that all the information provided above is
                  correct to best of my knowledge.{" "}
                </label>
              </div>
            </form>
            {doubleCheck && (
              <div className="submitbutton">
                <button onClick={submitForm} id="submit">
                  Submit
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
