import React, {useEffect, useState} from 'react'
import {obtenerTodos, guardar, editarporId} from "../../services/EstadoService";

export default function Estado() {


    const [estados, setEstados] = useState([]);
    const [estado, setEstado] = useState({
        _id: '',
        nombre: '',
        estado: false
    })
    const [error, setError]  =  useState(false);
    const [hidden] = useState("hidden")
    const [loading, setLoading] = useState(false);

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
        setLoading(true);
        e.preventDefault();
        //console.log(estado);
        if(estado._id){
            editarEstado();
        }else{
            guardarEstado();
        }

    }

    const guardarEstado = () => {
        guardar(estado).then(r => {
            console.log('texto')
            if(estado.estado === 'true'){
                setEstados([...estados, r.data]);
                console.log('estado true: ', estado)
                changeError(false)
                setLoading(false);
            }else {

                console.log('estado false: ', estado)
                setLoading(false);
                closeModal();

            }
        }).catch(error => {
            console.log(error)
            changeError(true)
            setLoading(false);
        })
    }

    const closeModal = () => {
        setEstado({
            _id: '',
            nombre: '',
            estado: false
        })

        changeError(false)
    }

    const openEditById = e => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            const id = e.target.getAttribute("data")
            const estadoFilter = estados.filter(est => est._id === id)[0];
            setEstado({
                ...estadoFilter
            });
        }, 1000)
    }

    const editarEstado = e => {
        editarporId(estado._id, estado).then(r => {
            const id = r.data._id;
            if(!r.data.estado){
                const activos = estados.filter(est => est._id !== id);
                setEstados(activos);
            }
            changeError(false)
            setLoading(false);
        }).catch(error => {
            console.log(error)
            changeError(true)
            setLoading(false);
        })

    }

    return (
        <div className="container"><h1 className='text-center'>Estado </h1>
            <button type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={closeModal}>
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
                                                className="btn btn-outline-success"
                                                data-bs-toggle="modal"
                                                data-bs-target="#exampleModal"
                                                data={est._id}
                                                onClick={e => openEditById(e)}>
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
                            <h5 className="modal-title" id="exampleModalLabel">{estado._id ? 'Editar estado' : 'Ingrese nuevo estado'}</h5>
                            &nbsp;&nbsp;
                            {
                                (loading &&
                                    <div className="spinner-grow text-success" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                )
                            }
                            <button type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                    onClick={closeModal}>

                            </button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={add}>
                                <input type={hidden} name="_id" value={estado._id}></input>
                                <div className="mb-3">
                                    <label htmlFor="recipient-name" className="col-form-label">Nombre:</label>
                                    <input required
                                           disabled={estado._id ? true : false}
                                           readOnly={estado._id ? true : false}
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
                                            className="btn btn-primary"
                                            data-bs-dismiss="modal">

                                        <i  className="fa-solid fa-floppy-disk"></i> Enviar
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