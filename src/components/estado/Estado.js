import React, {useEffect, useState} from 'react'
import {obtenerTodos} from "../../services/EstadoService";

export default function Estado() {


    const [estados, setEstados] = useState([]);

    useEffect( () => {
        const getEstados = () => {
            obtenerTodos().then(r => {
                console.log(r);
                setEstados(r.data.tasks);
            }).catch(e => {
                console.log(e)
            })
        }
        getEstados();
    }, []);



    return (
        <div className="container"><h1 className='text-center'>Estado </h1>
            <button type="button"
                    className="btn btn-primary">
                <i className="fa-solid fa-file-circle-plus"></i>
            </button>

            <div className="table-responsive">
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col"><i className="fa-solid fa-users-viewfinder"></i></th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Estado</th>
                        <th scope="col">Creacion</th>
                        <th scope="col">Actualización</th>
                        <th scope="col">Acciones</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            estados.map((est, index) => {
                                return(
                                    <tr>
                                        <th scope="row">{index + 1}</th>
                                        <td>{est.nombre}</td>
                                        <td>{est.estado}</td>
                                        <td>{est.createdAt}</td>
                                        <td>{est.updatedAt}</td>
                                        <td>
                                            <button type="button"
                                                    className="btn btn-outline-success">
                                                <i  className="fa-solid fa-pen-to-square"></i>
                                            </button>

                                            <button type="button"
                                                    className="btn btn-outline-danger">
                                                <i className="fa-solid fa-trash"></i>
                                            </button>

                                        </td>
                                    </tr>
                                );
                            })
                        }

                    </tbody>
                </table>
            </div>


        </div>
    )
}