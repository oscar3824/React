import "./ListaCursos.css"
const ListaCursos = (props) => {
   

    const manejarCambio = (e) => {
        props.actualizarCurso(e.target.value)
      
    }
    return ( 
        <div className="lista__opciones">
            <label>Cursos</label>
            <select value={props.valor} onChange={manejarCambio} >
                <option value="" disabled defaultValue="" hidden>Selecionar equipo</option>
                {props.cursos.map((curso, index) => <option key={index} value={curso}>{curso} </option>)}

            </select>
        </div>
     );
}
 
export default ListaCursos;