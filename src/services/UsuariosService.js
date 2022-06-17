import { axiosConfig} from "../config/axiosConfig";

export  const  obtenerTodos = (estado) => {
    return axiosConfig.get(
        '/users'
    );
}

export const guardar  = (estado) => {
    return axiosConfig.post('/users', estado);
}
//
export const editarporId = (id, estado) => {
    return axiosConfig.put('/users/'+id, estado);
}