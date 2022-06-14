import React, {useEffect} from 'react'
import {obtenerTodos} from "../../services/EstadoService";

export default function Estado() {

    useEffect( () => {
        const getEstados = () => {
            obtenerTodos().then(r => {
                console.log(r)
            }).catch(e => {
                console.log(e)
            })
        }
        getEstados();
    }, []);



    return (
        <div>Estado</div>
    )
}