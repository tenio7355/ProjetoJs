import { getAllProfessorsApi } from "../../service/professoresService.js";
/**
 * @function getAllProfessor busca array de professores do banco de dados
*/
export async function getAllProfessor() {
    const allProfessors = await getAllProfessorsApi();
    return allProfessors;
}
