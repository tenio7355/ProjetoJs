import Discipline from "../../classes/Discipline.js";
import Professor from "../../classes/Professor.js";
import { getAllDisciplines } from "../../controller/discipline/getDiscipline.js";
import { putDiscipline } from "../../controller/discipline/putDiscipline.js";
import { putProfessor } from "../../controller/professor/putProfessor.js";
import currentProfessor from "../../utils/currentProfessor.js";
import { handleHeader } from "../../utils/handleHeader.js";
import { removeSerchParamsUrl } from "../../utils/modifySearchParamsUrl.js";
const dialogOverlay = document.getElementById(`dialog-overlay`);
const dialogContent = document.getElementById(`dialog-content`);
const alertMeetFinished = document.getElementById(`alert-meetFinished`);
const professor = new Professor(await currentProfessor());
const allDisciplines = await getAllDisciplines();
handleHeader(professor);
dialogContent.innerHTML += `
  <div>
    <h1 class="text-xl font-medium">Professor Já Existente!</h1>
    <p>Já existe um professor inscrito nessa disciplina!</p>
  </div>
  <div class="flex justify-end gap-4">
  <button id="apply-for-discipline" class="btn btn-outline">Concorrer à Vaga</button>
  <button id="giveUp-discipline" class="btn btn-default">Ceder Vaga</button>
  </div>
`;
const buttonGiveUp = document.getElementById(`giveUp-discipline`);
const buttonApply = document.getElementById(`apply-for-discipline`);
buttonGiveUp.addEventListener("click", event => {
    dialogOverlay.classList.add("hidden");
    removeSerchParamsUrl();
});
buttonApply.addEventListener("click", async (event) => {
    const params = new URL(window.location.href).searchParams;
    const idDisciplineParams = params.get("idDiscipline");
    const disciplineFound = allDisciplines.find(thisDiscipline => thisDiscipline.id === idDisciplineParams);
    if (disciplineFound) {
        const discipline = new Discipline(disciplineFound);
        discipline.idProfessor.push(professor.id);
        professor.workLoad += discipline.workLoad;
        await putProfessor(professor);
        await putDiscipline(discipline);
        location.reload();
    }
    removeSerchParamsUrl();
    dialogOverlay.classList.add("hidden");
});
