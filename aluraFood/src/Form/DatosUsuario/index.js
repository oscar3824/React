
import React from "react";
import { TextField, Button, Box } from "@mui/material";
import { useState } from "react";
import {validarEmail, validarContraseña} from "./Validaciones.js"



const DatosUsuario = ({updateStep}) => {

  const [email, setEmail] = useState({value:"" , valid : null})
  const [contraseña, setContraseña] = useState({value: "", valid:null})

  return (  
    <Box
    onSubmit={(e) =>{
      e.preventDefault()
      if(email.valid && contraseña.valid){
        console.log({email, contraseña})
        updateStep(1);

      }else{
        console.log("Datos erroneos")
      }
    }}
    component="form"
    autocomplete="off"
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    }}
  >
    <TextField
      label="Correo electrónico"
      variant="outlined"
      fullWidth
      margin="dense"
      type="email"
      error={email.valid === false}
      helperText={email.valid === false && "Ingresa un correo electrónico válido"}
      value={email.value}
      onChange={(input) => {
        const email = input.target.value
        setEmail({value: email , valid:validarEmail(email)
        })      

      }
      }
    />
    <TextField
      label="Contraseña"
      variant="outlined"
      fullWidth
      margin="dense"
      type="password"
      error= {contraseña.valid === false}
      helperText={contraseña.valid === false && "Ingersa una contraseña valida"}
      value={contraseña.value}
      onChange={(input) =>{
        const contraseña = input.target.value
        setContraseña({value:contraseña , valid:validarContraseña(contraseña)
        })

      }
      
      }
    />
    <Button variant="contained" type="submit">
      Siguiente
    </Button>
  </Box>
  );
}
 
export default DatosUsuario;

     
  