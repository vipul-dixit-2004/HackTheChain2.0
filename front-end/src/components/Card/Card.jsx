import "./Card.css";
import fileImage from "../../assets/file.png";
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
      <div class="content">
        <h3>{textContent}</h3>
        <img src={fileImage} width={"100px"} />
      </div>
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
      </div>
    </div>
  );
}
