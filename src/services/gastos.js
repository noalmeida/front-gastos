import { http } from "./config";

export default {
    listar:() => {
        return http.get('gastos/all')
    },
    salvar:(gastos) => {
        return http.post('gastos', gastos)
    },
    listarById:(id) => {
        return http.get(`gastos/${id}`)
    }

}