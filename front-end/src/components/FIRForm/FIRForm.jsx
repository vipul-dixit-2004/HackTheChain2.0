export default function FIRForm({ data }) {
  //   console.log(data)
  return (
    <>
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
                      defaultValue={data[0]}
                      id="informername"
                      placeholder="First Name"
                      className="inputclass"
                      disabled
                    />
                    <input
                      type="text"
                      defaultValue={data[1]}
                      id="informerlastname"
                      placeholder="Last Name"
                      className="inputclass"
                      disabled
                    />
                  </div>
                </div>
                <div className="detailsbox">
                  <label htmlFor="informerphone">Phone</label>
                  <input
                    type="tel"
                    id="informerphone"
                    defaultValue={data[2]}
                    placeholder="Phone"
                    className="inputclass"
                    disabled
                  />
                </div>
                <div className="detailsbox">
                  <label htmlFor="informeremail">Email</label>
                  <input
                    type="email"
                    id="informeremail"
                    defaultValue={data[3]}
                    placeholder="Email"
                    className="inputclass"
                    disabled
                  />
                </div>
                <div className="detailsbox">
                  <label htmlFor="informeraddress">Address</label>
                  <input
                    type="text"
                    id="informeraddress"
                    defaultValue={data[4]}
                    placeholder="Address"
                    className="inputclass"
                    disabled
                  />
                </div>
                <div className="detailsbox">
                  <label htmlFor="informeradhaar">Adhaar Number</label>
                  <input
                    type="text"
                    id="informeradhaar"
                    defaultValue={data[5]}
                    placeholder="Adhaar Number"
                    className="inputclass"
                    disabled
                  />
                </div>
              </div>
            </div>

            {data[6] == "on" && (
              <>
                <div className="checkbox">
                  <input
                    type="checkbox"
                    id="suspectcheck"
                    className="inputclass"
                    defaultChecked
                  />
                  <label htmlFor="suspectcheck">Do you have a suspect</label>
                </div>
                <div id="suspectdetails" className="outerdetailsbox">
                  <h2>Suspect Details</h2>
                  <div className="innerdetailsbox">
                    <div className="detailsbox">
                      <label htmlFor="suspectname">Name</label>
                      <div id="fullname">
                        <input
                          type="text"
                          id="suspectname"
                          defaultValue={data[7]}
                          placeholder="First Name"
                          className="inputclass"
                          disabled
                        />
                        <input
                          type="text"
                          id="suspectlastname"
                          defaultValue={data[8]}
                          placeholder="Last Name"
                          className="inputclass"
                          disabled
                        />
                      </div>
                    </div>
                    <div className="detailsbox">
                      <label htmlFor="suspectaddress">Address</label>
                      <input
                        type="text"
                        id="suspectaddress"
                        defaultValue={data[9]}
                        placeholder="Address"
                        className="inputclass"
                        disabled
                      />
                    </div>
                    <div className="detailsbox">
                      <label htmlFor="suspectothers">Others</label>
                      <input
                        type="text"
                        id="suspectothers"
                        defaultValue={data[10]}
                        placeholder="Eg. Phone, Desciption etc"
                        className="inputclass"
                        disabled
                      />
                    </div>
                  </div>
                </div>
              </>
            )}
            <div id="crimedetails" className="outerdetailsbox">
              <h2>Crime Details</h2>
              <div className="innerdetailsbox">
                <div className="detailsbox">
                  <label htmlFor="crimetype">Type of Crime</label>
                  <input
                    type="text"
                    id="crimetype"
                    defaultValue={data[11]}
                    placeholder="Type of Crime"
                    className="inputclass"
                    disabled
                  />
                </div>
                <div className="detailsbox">
                  <label htmlFor="crimedate">Date of Crime</label>
                  <input
                    type="date"
                    id="crimedate"
                    defaultValue={data[12]}
                    className="inputclass"
                    disabled
                  />
                </div>
                <div className="detailsbox">
                  <label htmlFor="crimetime">Time of Crime</label>
                  <input
                    type="time"
                    id="crimetime"
                    defaultValue={data[13]}
                    className="inputclass"
                    disabled
                  />
                </div>
                <div className="detailsbox">
                  <label htmlFor="crimeplace">Place of Crime</label>
                  <input
                    type="text"
                    defaultValue={data[14]}
                    id="crimeplace"
                    placeholder="Place of Crime"
                    className="inputclass"
                    disabled
                  />
                </div>
                <div className="detailsbox">
                  <label htmlFor="crimedescription">Description</label>
                  <textarea
                    type="text"
                    id="crimedescription"
                    defaultValue={data[15]}
                    placeholder="Description"
                    className="inputclass"
                    disabled
                  ></textarea>
                </div>
                <div className="detailsbox">
                  <label htmlFor="Section">Section</label>
                  <input
                    style={{ overflowX: scroll }}
                    type="text"
                    id="Section"
                    defaultValue={data[16]}
                    placeholder="Section"
                    className="inputclass"
                    disabled
                  />
                </div>
                <div className="detailsbox">
                  <label htmlFor="distance">Distance from Police station</label>
                  <input
                    type="text"
                    defaultValue={data[17]}
                    id="distance"
                    placeholder="Distance from Police station"
                    className="inputclass"
                    disabled
                  />
                </div>
                <div className="detailsbox">
                  <label htmlFor="Others">Others</label>
                  <textarea
                    type="text"
                    defaultValue={data[18]}
                    id="Others"
                    placeholder="Other Details"
                    className="inputclass"
                    disabled
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
                    defaultValue={data[19]}
                    placeholder="Station Name"
                    className="inputclass"
                    disabled
                  />
                </div>
                <div className="detailsbox">
                  <label htmlFor="stationnumber">Station Number</label>
                  <input
                    type="text"
                    id="stationnumber"
                    defaultValue={data[20]}
                    placeholder="Station Number"
                    className="inputclass"
                    disabled
                  />
                </div>
                <div className="detailsbox">
                  <label htmlFor="stationaddress">Address</label>
                  <input
                    type="text"
                    defaultValue={data[21]}
                    id="stationaddress"
                    placeholder="Station Address"
                    className="inputclass"
                    disabled
                  />
                </div>
                <div className="detailsbox">
                  <label htmlFor="stationphone">Phone</label>
                  <input
                    type="tel"
                    id="stationphone"
                    defaultValue={data[22]}
                    placeholder="Station Phone"
                    className="inputclass"
                    disabled
                  />
                </div>
              </div>
            </div>

            <div className="checkbox">
              <input
                type="checkbox"
                id="declaration"
                defaultChecked
                className="inputclass"
                // disabled
              />
              <label htmlFor="declaration">
                I hereby declare that all the information provided above is
                correct to best of my knowledge.
              </label>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
