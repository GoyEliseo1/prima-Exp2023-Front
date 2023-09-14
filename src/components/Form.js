import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import axios from "axios";
import { useForm } from "react-hook-form";
import Modal from "./Modal";
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: theme.spacing(4),
  },
  textField: {
    margin: theme.spacing(1),
    width: "100%",
  },
  text: {
    textAlign: "center",
    fontFamily: "barlow",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "30px",
    lineHeight: "23px",
    color: "#000000",
  },
}));
let dataSet;
const saveData = async(data) => {
  console.log("🚀  file: Form.js:45  saveData  data:", data);
  function calculateAge(dateString) {
    const birthday = new Date(dateString);
    const ageDifMs = Date.now() - birthday.getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
  data.age=calculateAge(data.age)
  const ola =await axios.post("https://prima-exp2023-back.onrender.com/form", data,{ headers: { 'Content-Type': 'application/json' } })
  delete ola.data.email
  delete ola.data.id
  delete ola.data.phone
  ola.data.view=true
  dataSet(ola.data)
};
export function addressValidator(address) {
  if (address === "123 1st St., New York, NY") {
    return true;
  }
  return false;
}

export function Error({ errors }) {
  return <div className={"error"}>{errors ? errors.message : " "}</div>;
}

const sicks = ["Celiaquía", "Dieabetes", "Otras"];

const Form = ({data}) => {
  const [errors, setErrors] = useState({});
  const [personName, setPersonName] = useState([]);
  const { register, handleSubmit } = useForm();

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const onError = (errors) => {
    setErrors({ ...errors });
    console.log(errors);
  };
  dataSet=data
  return (
    <form onSubmit={handleSubmit(saveData, onError)}>
      <h1>Formulario</h1>
      <label>Nombre</label>
      <input
        name="Nombre"
        {...register("name", {
          required: { value: true, message: "Por favor ingresa tu nombre" },
        })}
      />
      <Error errors={errors.name} />
      <label>Apellido</label>
      <input
        name="Apellido"
        {...register("lastName", {
          required: { value: true, message: "Por favor ingresa tu apellido" },
        })}
      />
      <Error errors={errors.lastName} />
      <label>Correo Electronico</label>
      <input
        name="Correo-electronico"
        {...register("email", {
          required: { value: true, message: "Por favor ingresa tu correo" },
        })}
      />
      <Error errors={errors.mail} />
      <label>Telefono</label>
      <input
        name="Telefono"
        {...register("phone", {
          required: { value: true, message: "Por favor ingresa tu numero telefonico" },
        })}
      />
      <Error errors={errors.mail} />
      <label>Direccion</label>
      <input
        name="Direccion"
        {...register("adress", {
          required: { value: true, message: "Por favor ingresa tu direccion" },
        })}
      />
      <Error errors={errors.adress} />
      <label>Fecha de nacimiento </label>
      <input
        name="Fecha-de-nacimiento"
        type="date"
        {...register("age", {
          required: {
            value: true,
            message: "Por favor ingresa tu fecha de nacimiento",
          },
        })}
      />
      <Error errors={errors.date} />
      <label> Sufre alguna enfermedad ? Ej: Diabetes, Celiaquía ... </label>
      <textarea
        name="Fecha-de-nacimiento"
        style={{
          width: "100%",
        }}
        {...register("sick", {
          required: {
            value: false,
          },
        })}
      />
      <input type="submit" className="submitButton" />
      
    </form>
     
  );
};

export default Form;
