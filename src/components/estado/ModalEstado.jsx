import React from 'react'

export default function ModalEstado({estado, loading, hidden, error, add, closeModal, changeEstado}) {
    return (
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
    )
}