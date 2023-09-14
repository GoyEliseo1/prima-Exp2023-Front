import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import "./app3.scss";

import img from "./images/images.png";
const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // height: '100vh',
    // width: '100vh',hola
  },
  img: {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "calc(100vh - 4rem)",
    width: "100vw",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    padding: "2rem",
  },
  text: {
    color: "white",
    fontSize: "3rem",
    fontWeight: "bold",
    textAlign: "center",
    textShadow: "2px 2px 4px #000000",
  },
});

function App3() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.img}>
        <h1 className={classes.text}>Hello World!</h1>
        <div className="button-combo">
          <div className="arrow-container">
            <div className="arrow"></div>
            <div className="arrow"></div>
            <div className="arrow"></div>
          </div>
          <Link to="/form">
            <Button variant="contained" color="primary">
              Quiero mi entrada
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App3;
