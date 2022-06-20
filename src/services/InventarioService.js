import { axiosConfig} from "../config/axiosConfig";

export  const  obtenerTodos = (estado) => {
    return axiosConfig.get(
        '/inventory'
    );
}

export const guardar  = (estado) => {
    return axiosConfig.post('/inventory', estado);
}
//
export const editarporId = (id, estado) => {
    return axiosConfig.put('/inventory/'+id, estado);
}