import Discipline from "../../classes/Discipline.js";
import { putDiscipline } from "../../controller/discipline/putDiscipline.js";
import { buttonApply, params, allDisciplines, professor } from "./index.js";
buttonApply.addEventListener("click", async (event) => {
    const idDisciplineParams = params.get("idDiscipline");
    const disciplineFound = allDisciplines.find(thisDiscipline => thisDiscipline.id === idDisciplineParams);
    if (disciplineFound) {
        const discipline = new Discipline(disciplineFound);
        discipline.idProfessor.push(professor.id);
        await putDiscipline(discipline);
    }
    removeSerchParamsUrl;
    // params.delete("idDiscipline")
    // dialogOverlay.classList.add("hidden")
});
