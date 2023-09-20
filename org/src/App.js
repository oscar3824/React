import { useState } from 'react';
import './App.css';
import "./componentes/Header/Header.js"
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario';
import MiOrg from "./componentes/MiOrg";
import Cursos from './componentes/Cursos';
import Footer from './componentes/Footer';
import { v4 as uuid } from "uuid"


function App() {
  // mostrar ocultar formulario
  const [formularioColaborador, actualizarMostrar] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([
    {
      id: uuid(),
      nombre: "Oscar Camacho",
      puesto: "Desarrollador Web",
      curso: "Frontend",
      imagen: "https://github.com/oscar3824.png",
      fav: true
    },
    {
      id: uuid(),
      nombre: "Oscar Camacho",
      puesto: "Desarrollador Web",
      curso: "Backend",
      imagen: "https://github.com/oscar3824.png",
      fav: true
    },
    {
      id: uuid(),
      nombre: "Oscar Camacho",
      puesto: "Desarrollador Web",
      curso: "FullStack",
      imagen: "https://github.com/oscar3824.png",
      fav: false
    }

  ])

  const [cursos, actualizarCursos] = useState([
    {
      id: uuid(),
      titulo: "Frontend",
      colorPrimario: "#ed333b",
    },
    {
      id: uuid(),
      titulo: "Backend",
      colorPrimario: "#A6D157",
    },
    {
      id: uuid(),
      titulo: "FullStack",
      colorPrimario: "#E06B69",
    }

  ])

  //Actualizar color curso

  const actualizarColor = (color, id) => {
    const cursosActualizados = cursos.map((curso) =>{
      if(curso.id === id){
        curso.colorPrimario = color
      }
      return curso;

    })
    actualizarCursos(cursosActualizados);

  }

  const crearCurso = (nuevoCurso) => {
    actualizarCursos([...cursos, {...nuevoCurso, id: uuid() }])
  }

  const cambiarMostrar = () => {
    actualizarMostrar(!formularioColaborador)
  }

  //Registro colaborador
  const registrarColaborador = (colaborador) => {
    actualizarColaboradores([...colaboradores, colaborador])
  }

  //Eliminar Colaborador
  const eliminarColaborador = (id) => {
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id != id)
    actualizarColaboradores(nuevosColaboradores)
  }
  const like = (id) =>{
    const colaboradoresActualizados = colaboradores.map((colaborador) =>{
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    actualizarColaboradores(colaboradoresActualizados)

  }


  return (
    <div className="App">
      <Header />
      {
        formularioColaborador === true ? <Formulario
          cursos={cursos.map((curso) => curso.titulo)}
          registrarColaborador={registrarColaborador}
          crearCurso={crearCurso}
        />
          : <div></div>
      }
      <MiOrg cambiarMostrar={cambiarMostrar} />
      {
        cursos.map((curso) => {
          return <Cursos datos={curso} key={curso.titulo}
            colaboradores={colaboradores.filter(colaborador => colaborador.curso === curso.titulo)}
            eliminarColaborador={eliminarColaborador}
            actualizarColor={actualizarColor}
            like = {like}
          />
        })
      }
      <Footer />


    </div>
  );
}

export default App;
