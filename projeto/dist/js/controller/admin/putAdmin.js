import { putAdminApi } from "../../service/administradorService.js";
export async function putAdmin(system) {
    await putAdminApi(system);
}
