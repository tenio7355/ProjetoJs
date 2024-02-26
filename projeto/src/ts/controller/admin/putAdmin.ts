import Admin from "../../classes/Admin.js"
import { putAdminApi } from "../../service/administradorService.js"

export async function putAdmin(system: Admin){
  await putAdminApi(system) 
}
