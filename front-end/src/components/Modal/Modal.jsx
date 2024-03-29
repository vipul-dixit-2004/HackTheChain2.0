import React, { useState } from "react";
import "./Modal.css";
import FIRForm from "../FIRForm/FIRForm";

export default function Modal({ modalIsOpen, data, closeModal }) {
  return (
    <div>
      {modalIsOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <span className="close-button" onClick={closeModal}>
              X
            </span>
            <FIRForm data={data} />
          </div>
        </div>
      )}
    </div>
  );
}
