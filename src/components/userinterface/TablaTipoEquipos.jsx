import React from 'react'

export default function TablaTipoEquipos({componentes, openEditById}) {
    return (
        <div className="table-responsive">
            <table className="table table-hover table-bordered table-striped">
                <thead>
                <tr>
                    <th scope="col"><i className="fa-solid fa-users-viewfinder"></i></th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Crea Usuario</th>
                    <th scope="col">Creacion</th>
                    <th scope="col">Actualización</th>
                    <th scope="col">Acciones</th>
                </tr>
                </thead>
                <tbody>
                {
                    componentes.map((est, index) => {
                        const date1 =  new Date(est.createdAt);
                        const date2 =  new Date(est.updatedAt);
                        const creacion = date1.getDay()+"/"+date1.getMonth()+"/"+date1.getFullYear()+"-"+date1.getHours()+":"+date1.getMinutes();
                        const actualizacion = date2.getDay()+"/"+date2.getMonth()+"/"+date2.getFullYear()+"-"+date1.getHours()+":"+date1.getMinutes();

                        return(
                            <tr key={est._id}>
                                <th scope="row">{index + 1}</th>
                                <td>{est.nombre}</td>
                                <td>{est.estado ? 'Activo' : 'Inactivo'}</td>
                                <td>{est.usuarios}</td>
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
    )
}