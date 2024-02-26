import { putSystemApi } from "../../service/sistemaService.js";
export async function putSystem(system) {
    await putSystemApi(system);
}
