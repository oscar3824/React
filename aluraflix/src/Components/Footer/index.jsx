import { styled } from "styled-components";
import logo from "../../assets/imagenes/logo.png"

const StyledFooter = styled.div`
background-color: black;
  display: flex;
  justify-content: center;
  height: 10vh;
  align-items: center;
  border-top: 4px solid blue;
    
`
const Logo = styled.img`
`
const Footer = () => {
    return ( 
        <StyledFooter>
            <Logo src={logo}></Logo>


        </StyledFooter>

    

     );
}
 
export default Footer;