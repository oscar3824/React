import { useState } from "react";
import "./Formulario.css"
import Campo from "../Campo";
import ListaCursos from "../ListaCursos"
import Boton from "../Boton";


const Formulario = (props) => {
    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [imagen, actualizarImagen] = useState("")
    const [curso, actualizarCurso] = useState("")

    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")

    const {registrarColaborador, crearCurso} = props


    const manejarEnvio = (e) =>{
        e.preventDefault();
        let datos = {
            nombre,
            puesto,
            imagen,
            curso
        }
        registrarColaborador(datos)

    }

    const manejarCurso = (e) =>{
        e.preventDefault();
        crearCurso({titulo, colorPrimario: color})
    }
    return (  
        <section className="formulario">
            <form onSubmit={manejarEnvio}>
                <h2>Rellena el formulario para crear el colaborador.</h2>
                <Campo
                    titulo="Nombre"
                    placeholder="Ingresar nombre"
                    required
                    valor={nombre}
                    actualizarValor={actualizarNombre}
                />
                <Campo
                    titulo="Puesto"
                    placeholder="Ingresar Puesto"
                    required
                    valor={puesto}
                    actualizarValor={actualizarPuesto}
                />
                <Campo
                    titulo="Imagen"
                    placeholder="Ingresar Imagen"
                    required
                    valor={imagen}
                    actualizarValor={actualizarImagen}
                />
                <ListaCursos
                    valor={curso}
                    actualizarCurso={actualizarCurso}
                    cursos={props.cursos}
                />
                <Boton>
                    Crear
                </Boton>
                
            </form>
            <form onSubmit={manejarCurso}>
                <h2>Rellena el formulario para crear el Equipo.</h2>
                <Campo
                    titulo="Titulo"
                    placeholder="Ingresar titulo"
                    required
                    valor={titulo}
                    actualizarValor={actualizarTitulo}
                />
                <Campo
                    titulo="Color"
                    placeholder="Ingresar color en hexadecimal"
                    required
                    valor={color}
                    actualizarValor={actualizarColor}
                    type="color"
                />
                <Boton>
                    Crear
                </Boton>
                </form>
                

        </section>

       
    );
}
 
export default Formulario;