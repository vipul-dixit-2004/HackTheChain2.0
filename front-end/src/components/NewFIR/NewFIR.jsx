import "./NewFIR.css";
import { useState } from "react";
import { crypto } from "crypto";

export default function NewFIR() {
  const [suspectCheck, setSuspectcheck] = useState(false);
  const [doubleCheck, setDoubleCheck] = useState(false);

  function submitForm() {
    const inputclass = document.getElementsByClassName("inputclass");

    const object = {};
    for (let i = 0; i < inputclass.length; i++) {
      object[i] = inputclass[i].value;
    }
    const data = JSON.stringify(object);
    console.log(data);
    let encrypted = encrypt(data);
    console.log(encrypted);
  }

  //copyed
  const algorithm = "aes-256-cbc"; //Using AES encryption
  const key = crypto.randomBytes(32);
  const iv = crypto.randomBytes(16);

  //Encrypting text
  function encrypt(text) {
    let cipher = crypto.createCipheriv("aes-256-cbc", Buffer.from(key), iv);
    let encrypted = cipher.update(text);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return { iv: iv.toString("hex"), encryptedData: encrypted.toString("hex") };
  }

  // Decrypting text
  function decrypt(text) {
    let iv = Buffer.from(text.iv, "hex");
    let encryptedText = Buffer.from(text.encryptedData, "hex");
    let decipher = crypto.createDecipheriv("aes-256-cbc", Buffer.from(key), iv);
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
  }

  return (
    <>
      <div className="formHolder">
        <form id="main">
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
                <label htmlFor="distance">Distance from Police station</label>
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
          {doubleCheck && (
            <div className="submitbutton">
              <button onClick={submitForm} id="submit">
                Submit
              </button>
            </div>
          )}
        </form>
      </div>
    </>
  );
}
