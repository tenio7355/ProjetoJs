import { getAllProfessor } from "../controller/professor/getProfessor.js";
import { getLocalStorageProfessor } from "./localStorageService.js";
const idUser = getLocalStorageProfessor();
const allProfessors = await getAllProfessor();
if (idUser) {
    const userFinded = allProfessors.find(professor => professor.id === idUser);
    if (!userFinded.isLoggedIn) {
        window.location.href = "/projeto/src/pages/login/index.html";
    }
}
else {
    window.location.href = "/projeto/src/pages/login/index.html";
}
