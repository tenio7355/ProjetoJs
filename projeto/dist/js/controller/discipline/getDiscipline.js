import { getAllDisciplinesApi } from "../../service/disciplinesService.js";
/**
 * @function getAllDisciplines busca array de disciplinas do banco de dados
*/
export async function getAllDisciplines() {
    const allDisciplines = await getAllDisciplinesApi();
    return allDisciplines;
}
