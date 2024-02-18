import "./Card.css";
export default function Card({
  textContent,
  idx,
  contract,
  functionHandler,
  setDecrypted,
  modalFunction,
}) {
  return (
    <div className="entry">
      <p>{textContent}</p>
      <div className="buttoncontainer">
        <button
          className="styledetailsbutton"
          onClick={async () => {
            let complain = await functionHandler(contract, idx + 1);
            setDecrypted(complain);
            modalFunction();
          }}
        >
          Details
        </button>
        <button className="styledownloadbutton">Download</button>
      </div>
    </div>
  );
}
