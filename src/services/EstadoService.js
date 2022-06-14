import { axiosConfig} from "../config/axiosConfig";

export  const  obtenerTodos = (estado) => {
    return axiosConfig.get(
        process.env.REACT_APP_BASE_URL+'/task'
    );
}

// export const guardar  = (estado) => {
//     return axiosConfig.post('/task', estado);
// }
//
// export const editarporId = (id, estado) => {
//     return axiosConfig.put('/task/'+id, estado);
// }