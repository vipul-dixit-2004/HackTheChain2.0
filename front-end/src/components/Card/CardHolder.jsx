import Card from "./Card";

export default function CardHolder({
  row,
  contract,
  functionHandler,
  setDecrypted,
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
      setDecrypted={setDecrypted}
      modalFunction={modalFunction}
    />
  ));
}
