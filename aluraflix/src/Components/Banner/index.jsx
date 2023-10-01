import {styled} from "styled-components"
import banner from "../../assets/imagenes/banner.png"

const Banner = () => {

    const StyleBanner = styled.div`
        width: 100%;
    `
    const StyleImg = styled.img`
        width: 100%;
        height: 100vh;

        
    `
    return ( 
        <StyleBanner>
            <StyleImg  src={banner} alt="Banner"/>
        </StyleBanner>
       
     );
}
 
export default Banner;