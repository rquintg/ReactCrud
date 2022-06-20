import React from 'react'

export default function TablaInventario({componentes, openEditById}) {
    return (
        <div className="table-responsive">
            <table className="table table-hover table-bordered table-striped">
                <thead>
                <tr>
                    <th scope="col" className="text-center"><i className="fa-solid fa-users-viewfinder"></i></th>
                    <th scope="col" className="text-center">Serial</th>
                    <th scope="col" className="text-center">Modelo</th>
                    <th scope="col" className="text-center">Descripcion</th>
                    <th scope="col" className="text-center">Foto</th>
                    <th scope="col" className="text-center">Precio</th>
                    <th scope="col" className="text-center">Usuario</th>
                    <th scope="col" className="text-center">Marca</th>
                    <th scope="col" className="text-center">Estado</th>
                    <th scope="col" className="text-center">Tipo Equipo</th>
                    <th scope="col" className="text-center">Acciones</th>
                </tr>
                </thead>
                <tbody>
                {
                    componentes.map((est, index) => {

                        return(
                            <tr key={est._id}>
                                <th scope="row" className="text-center" >{index + 1}</th>
                                <td className="text-center">{est.serial}</td>
                                <td className="text-center">{est.modelo}</td>
                                <td className="text-center">{est.descripcion}</td>
                                <td className="text-center">{est.foto}</td>
                                <td className="text-center">{est.precio}</td>
                                <td className="text-center">{est.usuarios}</td>
                                <td className="text-center">{est.marcas}</td>
                                <td className="text-center">{est.estados}</td>
                                <td className="text-center">{est.tipoEquipos}</td>
                                <td className="text-center">
                                    <button type="button"
                                            className="btn btn-outline-success"
                                            data-bs-toggle="modal"
                                            data-bs-target="#exampleModal"
                                            data={est._id}
                                            onClick={e => openEditById(e)}>
                                        <i  className="fa-solid fa-pen-to-square"
                                            data={est._id}
                                            onClick={e => openEditById(e)}></i>
                                    </button>

                                    {/*<button type="button"*/}
                                    {/*        className="btn btn-outline-danger">*/}
                                    {/*    <i className="fa-solid fa-trash"></i>*/}
                                    {/*</button>*/}

                                </td>
                            </tr>
                        );
                    })
                }

                </tbody>
            </table>
        </div>
    )
}