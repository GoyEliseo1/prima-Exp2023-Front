import React from "react";
import "./GetTicket.scss";
import Container from "@material-ui/core/Container";
import imagen from "../../images/pe.png";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

const GetTicket = () => {
  return (
    <div className="container">
      <div className="rigth-container">
        <img src={imagen} className="home-image" alt="Get-Ticket" border="0" />
        <h2>
          Una tarde llena juegos, música y Dios.<br/>
          Trae tu energía, tus amigos y
          tu corazón abierto.<br/>
          <br/>
          ¡No querrás perdértelo!
        </h2>
          <Link to="/form">
            <Button variant="contained" color="primary">
              Quiero mi entrada
            </Button>
          </Link>
      </div>
    </div>
  );
};

export default GetTicket;
