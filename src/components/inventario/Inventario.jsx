import React, {useEffect, useState} from 'react'
import {editarporId, guardar, obtenerTodos} from "../../services/InventarioService";
import TablaModulos from "../userinterface/TablaInventario";
import ModalWindow from "../inventario/Modalinventario";

export default function Inventario() {

    const [estados, setEstados] = useState([]);
    const [estado, setEstado] = useState({
        _id: '',
        serial: '',
        modelo: '',
        descripcion: '',
        foto: '',
        color:'',
        precio: '',
        email: '',
        marcas: '',
        estados: '',
        tipoEquipos: '',

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
        e.preventDefault();
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
        console.log(estado);
        if(estado._id){
            editarEstado();
        }else{
            guardarEstado();
        }
        closeModal();

    }

    const guardarEstado = () => {

        // const request = {
        //     serial: estado.serial,
        //     modelo: estado.modelo,
        //     descripcion: estado.descripcion,
        //     foto: estado.foto,
        //     color:estado.color,
        //     precio: estado.precio,
        //     usuarios: {
        //         email: estado.usuarios
        //     },
        //     marcas: {
        //         nombre: estado.marcas
        //     },
        //     estados: {
        //         nombre: estado.estados
        //     },
        //     tipoEquipos: {
        //         nombre: estado.tipoEquipos
        //     },
        //
        // }

        console.log('req: ',estado)
        guardar(estado).then(r => {

                setEstados([...estados, r.data]);

                changeError(false)
                setLoading(false);

        }).catch(error => {
            console.log(error)
            changeError(true)
            setLoading(false);
        })
    }

    const closeModal = () => {
        setEstado({
            _id: '',
            serial: '',
            modelo: '',
            descripcion: '',
            foto: '',
            color:'',
            precio: '',
            email: '',
            marcas: '',
            estados: '',
            tipoEquipos: '',
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
                obtenerTodos().then(r => {
                    console.log(r);
                    setEstados(r.data.tasks);
                }).catch(e => {
                    console.log(e)
                })
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
        <div className="container">
            <div className="d-flex justify-content-center ">
                <h1 className='text-white bg-warning border  rounded-4 p-2'>Inventario</h1>
            </div>


            <button type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={closeModal}>
                <i className="fa-solid fa-file-circle-plus"></i>
            </button>
            <br/>
            <br/>

            <TablaModulos componentes={estados}
                          openEditById={openEditById}
            />

            <ModalWindow
                estado={estado}
                loading={loading}
                closeModal={closeModal}
                hidden={hidden}
                changeEstado={changeEstado}
                error={error}
                add={add}
            />

        </div>
    )
}