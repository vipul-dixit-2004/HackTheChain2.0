import Card from "./Card";
import "./Card.css";
export default function CardHolder({
  row,
  getRecord,
  contract,
  functionHandler,
  complain,
  setComplain,
  modalFunction,
}) {
  const rowArray = Array.from({ length: row }, (_, index) => index + 1);
  return rowArray.map((element, idx) => (
    <Card
      key={element}
      functionHandler={functionHandler}
      contract={contract}
      idx={idx}
      textContent={"FIR000" + element}
      complain={complain}
      setComplain={setComplain}
      modalFunction={modalFunction}
    />
  ));
}
