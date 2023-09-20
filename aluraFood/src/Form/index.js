import React  from "react";
import { Box, Typography } from "@mui/material";
import { LogoSpace, FormSpace, Img } from "./styles";
import DatosUsuario from "./DatosUsuario";
import DatosPersonales from "./DatosPersonales";
import DatosEntrega from "./DatosEntrega";
import Complete from "./Complete";
import Stepper from "../Stepper";
import { useState, useEffect} from "react";
import Step from "./Step";

import {validarEmail, validarContraseña} from "./DatosUsuario/Validaciones.js"

const Form = () => {

  const [step, setStep] = useState(0);
  const [pasos, setPasos] = useState();

  useEffect( () =>{
    console.log("Se ha actualizado el valor de step", step)
  },[step]);

  const updateStep = (step) =>{
    console.log("Update", step)
    setStep(step)
  }
  const steps = {
    0:<DatosUsuario updateStep={updateStep}/>,
    1: <DatosPersonales updateStep={updateStep}/>,
    2:<DatosEntrega updateStep={updateStep}/>,
    3:<Complete updateStep={updateStep} />
}
  const onSubmit = (e) =>{
    e.preventDefault()
    let newStep = step+1
    setStep(newStep)
    console.log("newStep", newStep)
    console.log(step)

  };
  const handleChange = (element, position, currentStep, validator) =>{
    const value = element.target.value;
    const valid = validator(value)
    console.log(value);
    console.log(position);
    console.log(currentStep);
    console.log(valid);



  };
  const stepsFlow = {
    0: {
      inputs: [
        {
          label: "Correo electronico",
          type: "email",
          value: "",
          valid: null,
          onChange: handleChange,
          helperText: "Ingresa un correo Valido",
          validator: validarEmail
        },
        {
          label: "Contraseña",
          type: "password",
          value: "",
          valid: null,
          onChange: handleChange,
          helperText: "Ingresa una contraseña valida",
          validator: validarContraseña
        }
      ],
      buttonText: "Siguiente",
      onSubmit
    },
    1: {
      inputs: [
        {
          label: "Correo electronico",
          type: "email",
          value: "",
          valid: null,
          onChange: handleChange,
          helperText: "Ingresa un correo Valido",
          validator: validarEmail
        },
        {
          label: "Contraseña",
          type: "password",
          value: "",
          valid: null,
          onChange: handleChange,
          helperText: "Ingresa una contraseña valida",
          validator: validarContraseña
        }
      ],
      buttonText: "Siguiente",
      onSubmit
    }
  }
  return (
    <Box
      sx={{
        padding: "30px",
        display: "flexbox",
        flexDirection: "column",
      }}
    >
      <LogoSpace>
        <Img src={"/favicon.png"} />
        <Typography variant="h3">AluraFood</Typography>
      </LogoSpace>
      <FormSpace>
      {step <3 && <Stepper step={step}/>}
      {/*steps[step]*/}
      <Step data={stepsFlow[step]} step={step}/>

        
      </FormSpace>
    </Box>
  );
};

export default Form;
