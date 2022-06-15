import React, {useEffect, useState} from 'react'
import {obtenerTodos, guardar} from "../../services/EstadoService";

export default function Estado() {


    const [estados, setEstados] = useState([]);
    const [estado, setEstado] = useState({
        nombre: '',
        estado: false
    })
    const [error, setError]  =  useState(false);

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

    const changeEstado =  e => {
        setEstado({
            ...estado,
            [e.target.name]: e.target.value
        })
    }

    const changeError = e => {
        setError(e);
    }

    const add = e => {
        e.preventDefault();
        console.log(estado);
        guardarEstado();

    }

    const guardarEstado = () => {
        guardar(estado).then(r => {
            setEstados([...estados, r.data]);
            changeError(false)
        }).catch(error => {
            console.log(error)
            changeError(true)
        })
    }

    const closeModal = () => {
        setEstado({
            nombre: '',
            estado: false
        })

        changeError(false)
    }

    return (
        <div className="container"><h1 className='text-center'>Estado </h1>
            <button type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal">
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
                            const date1 =  new Date(est.createdAt);
                            const date2 =  new Date(est.updatedAt);
                            const creacion = date1.getDay()+"/"+date1.getMonth()+"/"+date1.getFullYear();
                            const actualizacion = date2.getDay()+"/"+date2.getMonth()+"/"+date2.getFullYear();

                            return(
                                <tr key={est._id}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{est.nombre}</td>
                                    <td>{est.estado ? 'Activo' : 'Inactivo'}</td>
                                    <td>{creacion}</td>
                                    <td>{actualizacion}</td>
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

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Ingrese nuevo estado</h5>
                            <button type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                    onClick={closeModal}>

                            </button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={add}>
                                <div className="mb-3">
                                    <label htmlFor="recipient-name" className="col-form-label">Nombre:</label>
                                    <input required
                                           value={estado.nombre}
                                           name="nombre"
                                           type="text"
                                           className="form-control"
                                           onChange={changeEstado}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message-text" className="col-form-label">Estado:</label>
                                    <select required
                                            className="form-select"
                                            aria-label="Default select example"
                                            value={estado.estado}
                                            name="estado"
                                            onChange={changeEstado}>
                                        <option value={true}>Activo</option>
                                        <option value={false}>Inactivo</option>
                                    </select>
                                </div>

                                <div className="modal-footer">
                                    <div className={error ? 'alert alert-danger' : 'd-none'} role="alert">
                                        Ha ocurrido un error!
                                    </div>
                                    <button type="button"
                                            className="btn btn-secondary"
                                            data-bs-dismiss="modal"
                                            onClick={closeModal}>
                                        <i className="fa-solid fa-arrow-right-from-bracket"></i> Cancelar
                                    </button>
                                    <button type="submit"
                                            className="btn btn-primary">
                                        <i className="fa-solid fa-floppy-disk"></i> Enviar
                                    </button>
                                </div>

                            </form>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}