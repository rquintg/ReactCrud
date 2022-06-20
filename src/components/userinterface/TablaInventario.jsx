import React from 'react'

export default function TablaInventario({componentes, openEditById}) {
    return (
        <div className="table-responsive">
            <table className="table table-hover table-bordered table-striped">
                <thead>
                <tr>
                    <th scope="col"><i className="fa-solid fa-users-viewfinder"></i></th>
                    <th scope="col">Serial</th>
                    <th scope="col">Modelo</th>
                    <th scope="col">Descripcion</th>
                    <th scope="col">Foto</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Usuario</th>
                    <th scope="col">Marca</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Tipo</th>
                    <th scope="col">Acciones</th>
                </tr>
                </thead>
                <tbody>
                {
                    componentes.map((est, index) => {

                        return(
                            <tr key={est._id}>
                                <th scope="row">{index + 1}</th>
                                <td>{est.serial}</td>
                                <td>{est.modelo ? 'Activo' : 'Inactivo'}</td>
                                <td>{est.descripcion}</td>
                                <td>{est.foto}</td>
                                <td>{est.precio}</td>
                                <td>{est.usuarios}</td>
                                <td>{est.marcas}</td>
                                <td>{est.estados}</td>
                                <td>{est.tipoEquipos}</td>
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
    )
}