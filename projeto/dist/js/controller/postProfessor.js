import { postProfessorApi } from "../service/professoresService.js";
export async function postProfessor(professor) {
    await postProfessorApi(professor);
}
