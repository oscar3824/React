import { styled } from "styled-components";
import  logo from "../../assets/imagenes/logo.png"
import Button from "../Button";

const StyleHeader = styled.nav`
  background-color: black;
  display: flex;
  justify-content: space-between;
  padding: 0 15vw;
  height: 10vh;
  align-items: center;
`
const Logo = styled.img`
`
const  Header= () => {
    return (
        
        <StyleHeader>
            <Logo src={logo} alt="Logo AluraFlix"/>
        <Button>Hola</Button>

        </StyleHeader>

        
      );
}
 
export default Header;