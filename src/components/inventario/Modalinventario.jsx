import React from 'react'

export default function Modalinventario({estado, loading, hidden, error, add, closeModal, changeEstado}) {
    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{estado._id ? 'Editar Tipo de Equipo' : 'Ingrese nuevo Tipo de Equipo'}</h5>
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
                            <div className="row mb-4">
                                <div className="col">
                                    <label htmlFor="recipient-name" className="col-form-label">Serial:</label>
                                    <input required
                                           value={estado.serial}
                                           name="serial"
                                           type="text"
                                           className="form-control"
                                           placeholder="Ej: 1-2-3-4"
                                           onChange={changeEstado}/>
                                </div>
                                <div className="col">
                                    <label htmlFor="recipient-name" className="col-form-label">Modelo:</label>
                                    <input required
                                           value={estado.modelo}
                                           name="modelo"
                                           type="text"
                                           className="form-control"
                                           placeholder="Ej: 2028"
                                           onChange={changeEstado}/>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="recipient-name" className="col-form-label">Descripcion:</label>
                                <textarea required
                                       value={estado.descripcion}
                                       name="descripcion"
                                       type="text"
                                       placeholder="Ej: Equipo Recien formateado"
                                       className="form-control"
                                       onChange={changeEstado}/>
                            </div>
                            <div className="row mb-4">
                                <div className="col">
                                    <label htmlFor="recipient-name" className="col-form-label">Foto:</label>
                                    <input required
                                           value={estado.foto}
                                           name="foto"
                                           type="text"
                                           placeholder="Ej: www.google.com/foto.png"
                                           className="form-control"
                                           onChange={changeEstado}/>
                                </div>
                                <div className="col">
                                    <label htmlFor="recipient-name" className="col-form-label">Precio:</label>
                                    <input required
                                           value={estado.precio}
                                           name="precio"
                                           type="text"
                                           placeholder="Ingrese valor del producto"
                                           className="form-control"
                                           onChange={changeEstado}/>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="recipient-name" className="col-form-label">Usuario:</label>
                                <input required
                                       disabled={estado._id ? true : false}
                                       readOnly={estado._id ? true : false}
                                       value={estado.email}
                                       name="email"
                                       type="text"
                                       placeholder="Ej: Julio Martinez"
                                       className="form-control"
                                       onChange={changeEstado}/>
                            </div>
                            <div className="row mb-4">
                                <div className="col">
                                    <label htmlFor="recipient-name" className="col-form-label">Marca:</label>
                                    <input required
                                           disabled={estado._id ? true : false}
                                           readOnly={estado._id ? true : false}
                                           value={estado.marcas}
                                           name="marcas"
                                           type="text"
                                           className="form-control"
                                           placeholder="Ej: Apple"
                                           onChange={changeEstado}/>
                                </div>
                                <div className="col">
                                    <label htmlFor="recipient-name" className="col-form-label">Estado:</label>
                                    <input required
                                           disabled={estado._id ? true : false}
                                           readOnly={estado._id ? true : false}
                                           value={estado.estados}
                                           name="estados"
                                           type="text"
                                           placeholder="Ingrese estado de Equipo"
                                           className="form-control"
                                           onChange={changeEstado}/>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="recipient-name" className="col-form-label">Tipo Equipo:</label>
                                <input required
                                       disabled={estado._id ? true : false}
                                       readOnly={estado._id ? true : false}
                                       value={estado.tipoEquipos}
                                       name="tipoEquipos"
                                       type="text"
                                       placeholder="Ej: computo, movil"
                                       className="form-control"
                                       onChange={changeEstado}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="recipient-name" className="col-form-label">Color:</label>
                                <input required
                                       value={estado.color}
                                       name="color"
                                       type="text"
                                       placeholder="Ej: computo, movil"
                                       className="form-control"
                                       onChange={changeEstado}/>
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
    )
}