import { getAdminApi } from "../../service/administradorService.js";
/**
 * @function getAllAmin busca as informações do admin do banco de dados
*/
export async function getAdmin() {
    const system = await getAdminApi();
    return system;
}
