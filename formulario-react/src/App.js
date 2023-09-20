import './App.css';
import Container from '@mui/material/Container';
import SinIng from './Formulario/SingIn';
import { Typography } from '@mui/material';

function App() {
  const handleSubmit = (info) =>{
    console.log(info)

  }
  return (
    <Container component ="section" maxWidth = "sm">
    <Typography variant='h3' align='center' component= "h1">Formulario de registro</Typography>
    <SinIng handleSubmit = {handleSubmit}/>
     
    </Container>
  );
}

export default App;
