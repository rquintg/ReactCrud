import React from 'react'
import NavBar from "../components/userinterface/NavBar";
import Estado from "../components/estado/Estado";
import Usuarios from "../components/usuarios/Usuarios";
import Marca from "../components/marca/Marca";
import {BrowserRouter, Route ,Routes} from "react-router-dom";

export default function MainRouter() {
    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path='/' element={<Estado />}/>
                <Route path='/marcas' element={ <Marca />}/>
                <Route path='/usuarios' element={ <Usuarios />}/>
            </Routes>

        </BrowserRouter>


    )
}