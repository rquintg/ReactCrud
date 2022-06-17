import { axiosConfig} from "../config/axiosConfig";

export  const  obtenerTodos = (estado) => {
    return axiosConfig.get(
        '/brands'
    );
}

export const guardar  = (estado) => {
    return axiosConfig.post('/brands', estado);
}
//
export const editarporId = (id, estado) => {
    return axiosConfig.put('/brands/'+id, estado);
}