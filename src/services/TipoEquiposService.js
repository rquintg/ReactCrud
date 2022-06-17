import { axiosConfig} from "../config/axiosConfig";

export  const  obtenerTodos = (estado) => {
    return axiosConfig.get(
        '/tasks'
    );
}

export const guardar  = (estado) => {
    return axiosConfig.post('/tasks', estado);
}
//
export const editarporId = (id, estado) => {
    return axiosConfig.put('/tasks/'+id, estado);
}