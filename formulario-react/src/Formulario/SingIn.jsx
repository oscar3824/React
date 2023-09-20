import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Switch from '@mui/material/Switch';
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useState } from "react";

const SinIng = ({handleSubmit}) => {
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [prom, setProm] = useState(false)
    const [nov, setNov] = useState(true)

    const [errors, setErrors] = useState ({
        name: {
            error: false,
            mesagge: "No puede estar vacio"
        }
    

    }
    )
       

    return ( 
        <form onSubmit={(e) =>{
            e.preventDefault()
            handleSubmit({name,lastName, email, prom, nov})

        }}>
           
            <TextField
                id="name"
                label="Nombre"
                variant="outlined"
                fullWidth
                margin="normal"
                value={name}
                onChange={(e) =>
                  setName(e.target.value)

                }
            />
            <TextField
                id="apellidos"
                label="Apellidos"
                variant="outlined"
                fullWidth
                value={lastName}
                onChange={(e) =>
                    setLastName(e.target.value)
                }
                error = {errors.name.error}
                helperText = {errors.name.error ? errors.name.mesagge : ""}
            
            />
            <TextField
                id="email"
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
                value={email}
                onChange={(e) =>
                    setEmail(e.target.value)
                }

            />
            <FormGroup>
                <FormControlLabel control={
                    <Switch
                        checked = {prom}
                        onChange={(e) =>
                            setProm(e.target.checked)
                        }
                    />
                }
                    label="Promociones"
                />
                  <FormControlLabel control={
                    <Switch
                        checked = {nov}
                        onChange={(e) =>
                            setNov(e.target.checked)
                        }
                    />
                }
                    label="Novedades"
                />

            </FormGroup>
          
           <Button variant="contained" type="submit">Registrarse</Button>
    
        </form>
     );
}
 
export default SinIng;