import React,  { useState } from "react";
import "./Form.scss";
import Form from "../../components/Form";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import imagen from "../../images/pe.png";
import Modal from "../../components/Modal";


const FormPage = () => {  
  const [dataForm, setdataForm] = useState({
    view:false
  });
  return (
    <div className="container">
      <Box className="box-paper">
        <Paper
          variant="elevation"
          sx={{ p: 2 }}
          elevation={5}
          className="form-paper"
        >
          <img
            src={imagen}
            className="form-image"
            alt="Get-Ticket"
            border="0"
          />
       { !dataForm.view && <Form data={setdataForm}/>}
      </Paper>
      {dataForm.view && <Modal data={dataForm} />}
      </Box>
    </div>
  );
};

export default FormPage;
