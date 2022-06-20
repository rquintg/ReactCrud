import React from 'react'
import {NavLink} from "react-router-dom";

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg bg-danger">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img className="img-fluid"
                         src="https://www.sucesosmetropolitanos.com/wp-content/uploads/2020/09/logo-IU-660x332@2x.jpeg"
                         alt="Logo" width="150" height="60" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <NavLink
                            className="nav-item nav-link text-white p-3 rounded-4"
                            to='/'
                        >
                            <i className="fa-solid fa-sign-hanging"></i> Estados
                        </NavLink>
                        <NavLink
                            className="nav-item nav-link text-white p-3"
                            to='/marcas'
                        >
                            <i className="fa-solid fa-tags"></i> Marcas
                        </NavLink>
                        <NavLink
                            className="nav-item nav-link text-white p-3"
                            to='/tipoequipos'
                        >
                            <i className="fa-solid fa-walkie-talkie"></i> Tipos de Equipo
                        </NavLink>
                        <NavLink
                            className="nav-item nav-link text-white p-3"
                            to='/usuarios'
                        >
                            <i className="fa-solid fa-id-card-clip"></i> Usuarios
                        </NavLink>
                        <NavLink
                            className="nav-item nav-link text-white p-3"
                            to='/inventario'
                        >
                            <i className="fa-solid fa-envelopes-bulk"></i> Inventario
                        </NavLink>

                    </ul>

                </div>
            </div>
        </nav>
    )
}