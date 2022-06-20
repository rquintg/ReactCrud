import React from 'react'
import NavBar from "../components/userinterface/NavBar";
import Estado from "../components/estado/Estado";
import Usuarios from "../components/usuarios/Usuarios";
import Marca from "../components/marca/Marca";
import TipoEquipos from '../components/tipoequipos/TipoEquipos';
import  Inventario from '../components/inventario/Inventario';
import {BrowserRouter, Route ,Routes} from "react-router-dom";

export default function MainRouter() {
    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path='/' element={<Estado />}/>
                <Route path='/marcas' element={ <Marca />}/>
                <Route path='/usuarios' element={ <Usuarios />}/>
                <Route path='/tipoequipos' element={<TipoEquipos />}/>
                <Route path='/inventario' element={<Inventario />}/>
            </Routes>

        </BrowserRouter>


    )
}