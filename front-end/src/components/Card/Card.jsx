export default function Card({
  textContent,
  idx,
  contract,
  functionHandler,
  complain,
  setComplain,
  openModal,
}) {
  return (
    <div className="entry">
      <p>{textContent}</p>
      <div className="buttoncontainer">
        <button
          className="styledetailsbutton"
          onClick={async () => {
            let complain = await functionHandler(contract, idx + 1);
            setComplain(complain);
            openModal();
          }}
        >
          Details
        </button>
        <button className="styledownloadbutton">Download</button>
      </div>
    </div>
  );
}
