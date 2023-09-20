import { useEffect, useState } from "react";
import ListCategories from "../componets/ListCategories";
import ListPosts from "../componets/ListPosts";
import SubCategoria from "./SubCategoria";
import { buscar } from "../api/api";
import { useParams, Routes, Route, Link, useResolvedPath } from 'react-router-dom'
const Categoria = () => {
    const [subcategorias, setSubCategorias] = useState([])
    const {id} = useParams()
    const url = useResolvedPath("").pathname

    useEffect(()=>{
        buscar(`/categorias?id=${id}`, (response) =>{
            setSubCategorias(response[0].subcategorias)
        })

    },[id])
    return ( 
        <>
         <div className='container'>
                <h2 className='title-page'>Pet Noticias</h2>
            </div>
            <ListCategories/>
            <ul className='category-list container flex'>
                {
                    subcategorias.map(subcategoria => (
                        <li className={`category-list__category category-list__category--${id}`} key={subcategoria}>
                            <Link to={`${url}/${subcategoria}`}>
                                {subcategoria}
                            </Link>
                        </li>
                    ))
                }
            </ul>
            <Routes>
                <Route path="/" element={<ListPosts url={`/posts?categoria=${id}`}/>}/>
                <Route path="/:subcategoria" element={<SubCategoria/>}/>

            </Routes>
        </>
     );
}
 
export default Categoria;