import { putProfessorApi } from "../../service/professoresService.js";
export async function putProfessor(professor) {
    await putProfessorApi(professor);
}
