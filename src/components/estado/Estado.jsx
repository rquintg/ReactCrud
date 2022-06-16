import React, {useEffect, useState} from 'react'
import {obtenerTodos, guardar, editarporId} from "../../services/EstadoService";
import TablaModulos from "../userinterface/TablaModulos";
import ModalWindow from "./ModalWindow";

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
        //console.log(estado);
        if(estado._id){
            editarEstado();
        }else{
            guardarEstado();
        }
        closeModal();

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
        <div className="container">
            <h1 className='text-center'>Estado </h1>
                <button type="button"
                        className="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        onClick={closeModal}>
                    <i className="fa-solid fa-file-circle-plus"></i>
                </button>

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