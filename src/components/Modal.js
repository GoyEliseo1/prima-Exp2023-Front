import React from "react";
import "./Modal.css";
import QRCode from "react-qr-code";

function Modal({ data }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
        </div>
        <div className="title">
          <h1>Guarda una Captura de tu Entrada para presentarla</h1>
        </div>
        <div className="body">
        <QRCode value={JSON.stringify(data)} fgColor={data.color} />
        </div>
      </div>
    </div>
  );
}

export default Modal;