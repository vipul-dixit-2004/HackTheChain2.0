import "./Card.css";
import fileImage from "../../assets/file.png";
export default function Card({ textContent, idx, modalFunction }) {
  return (
    <div className="entry">
      <div className="content">
        <h3>{textContent}</h3>
        <img src={fileImage} width={"100px"} />
      </div>
      <div className="buttoncontainer">
        <button
          className="styledetailsbutton"
          onClick={async () => {
            modalFunction(idx + 1);
          }}
        >
          Details
        </button>
      </div>
    </div>
  );
}
