import { getAllProfessorsApi } from "../../service/professores.js";
export async function getAllProfessor() {
    const allProfessors = getAllProfessorsApi();
    return allProfessors;
}
