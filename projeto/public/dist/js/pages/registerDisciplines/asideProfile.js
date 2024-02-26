import { getAllDisciplines } from "../../controller/discipline/getDiscipline.js";
import currentProfessor from "../../utils/currentProfessor.js";
const professor = await currentProfessor();
const allDisciplines = await getAllDisciplines();
const inicialUserName = document.getElementById("inicial-name-user");
const userName = document.getElementById("user-name");
const typeProfessor = document.getElementById("user-specialization");
const userWorkLoad = document.getElementById("user-workLoad");
const userDisciplines = document.getElementById("user-disciplines");
inicialUserName.innerText = professor.name[0];
userName.innerText = professor.name;
typeProfessor.innerText = professor.isCoordinator ? "Professor (Coordenador)" : "Professor";
const wordLoadLimit = professor.isCoordinator ? 10 : 14;
userWorkLoad.innerText = `${professor.workLoad.toString()}h de ${wordLoadLimit}h semanais`;
innerTextDiscipline(professor.id);
function innerTextDiscipline(idProfessor) {
    const disciplinesFinded = allDisciplines.filter(disciplines => disciplines.idProfessor.includes(idProfessor));
    if (disciplinesFinded[0]) {
        const sizeArray = disciplinesFinded.length;
        disciplinesFinded.forEach((thisDiscipline, index) => {
            if (sizeArray !== index + 1) {
                userDisciplines.innerText += ` ${thisDiscipline.discipline},`;
            }
            else {
                userDisciplines.innerText += ` ${thisDiscipline.discipline}.`;
            }
        });
    }
    else {
        userDisciplines.innerText = "Nenhum";
    }
}
