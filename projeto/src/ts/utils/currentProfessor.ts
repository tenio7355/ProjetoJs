import { getAllProfessor } from "../controller/professor/getProfessor.js";
import { getLocalStorageProfessor } from "./localStorageService.js";

export default async function currentProfessor(){
    const allProfessors = await getAllProfessor()
    const idCurrentProfessor = getLocalStorageProfessor()
    const professorFinded = allProfessors.find(thisProfessor=> thisProfessor.id === idCurrentProfessor)!
    return professorFinded
}