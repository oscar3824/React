import "./Curso.css"
import Colaborador from "../Colaborador"

const Curso = (props) => {

   const {colorPrimario,titulo, id}= props.datos
   const {colaboradores, eliminarColaborador, actualizarColor, like} = props

   const obj = {
    backgroundColor:colorPrimario + "33"
   }
   const estiloTitulo ={borderColor: colorPrimario}
    
    return <>
        {
            <section className="equipo" style={obj}>
            <input 
            type={"color"}
            className="input__color"
            value={colorPrimario}
            onChange={((evento) =>{
            actualizarColor(evento.target.value, id)
            })}


            />
            <h3 style={estiloTitulo}>{titulo}</h3>
            <div className="colaboradores">
            {
                colaboradores.map((colaborador, index) => <Colaborador
                 datos={colaborador}
                  key={index}
                  colorPrimario={colorPrimario}
                  eliminarColaborador = {eliminarColaborador}
                  like = {like}

                  />
                )
            }
            
            </div>
        </section>
     

        }
     </>
}
 
export default Curso;
