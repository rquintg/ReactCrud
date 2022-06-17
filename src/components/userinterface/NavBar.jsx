import React from 'react'
import {NavLink} from "react-router-dom";

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Invetario</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <NavLink
                            className="nav-item nav-link text-bg-primary p-3"
                            to='/'
                        >
                            <i className="fa-solid fa-sign-hanging"></i> Estados
                        </NavLink>
                        <NavLink
                            className="nav-item nav-link text-bg-primary p-3"
                            to='/marcas'
                        >
                            <i className="fa-solid fa-tags"></i> Marcas
                        </NavLink>
                        <NavLink
                            className="nav-item nav-link text-bg-primary p-3"
                            to='/usuarios'
                        >
                            <i className="fa-solid fa-id-card-clip"></i> Tipos Equipos
                        </NavLink>

                    </ul>

                </div>
            </div>
        </nav>
    )
}