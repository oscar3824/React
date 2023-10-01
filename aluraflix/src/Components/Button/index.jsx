import styled from 'styled-components'

const Boton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 1px solid white;
  color: white;
  margin: 0 1em;
  padding: 7px 25px;
`
const Button = () => {
    return ( 
        <>
        <Boton>
            Nuevo video
        </Boton>
        </>
     );
}
 
export default Button ;