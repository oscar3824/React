import "./Footer.css"
import {AiFillLinkedin, AiFillGithub} from "react-icons/ai"
const Footer = () => {
    return ( 
       <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className='redes'>
           
            <a href='https://www.linkedin.com/in/developer-junior/'target="blank">
                <AiFillLinkedin className="redes"/>
            </a>
            <a href='https://github.com/oscar3824' target="black">
                <AiFillGithub className="redes"/>
            </a>
        </div>
        <img src='/img/Logo.png' alt='org' />
        <strong>Desarrollado por Oscar Camacho</strong>
    </footer>
     );
}
 
export default Footer;
