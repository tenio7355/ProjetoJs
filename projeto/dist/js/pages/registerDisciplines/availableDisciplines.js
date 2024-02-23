import Discipline from "../../classes/Discipline.js";
import { getAllDisciplines } from "../../controller/discipline/getDiscipline.js";
import { putDiscipline } from "../../controller/discipline/putDiscipline.js";
import currentProfessor from "../../utils/currentProfessor.js";
const allDisciplines = await getAllDisciplines();
const professor = await currentProfessor();
const ulDiscipline = document.getElementById("ulDiscipline");
const dialogOverlay = document.getElementById(`dialog-overlay`);
const dialogContent = document.getElementById(`dialog-content`);
allDisciplines.forEach(discipline => {
    ulDiscipline.innerHTML += ` 
  <li class="flex flex-col card space-y-3 justify-between">
    <div>
      <div class="flex  justify-between ">
        <h2 class="text-xl font-semibold">${discipline.nameCourse} - ${discipline.typeCourse} (${discipline.periodCourse})</h2> 
        <p class="h-fit text-sm font-medium badge badge-outline">${discipline.timePeriod}</p> 
      </div>
      <p>${discipline.discipline} - ${discipline.workLoad}h semanais</p>
    </div>
    <button id="${discipline.id}" class="btn btn-default self-start">Inscrever-se</button>
    <button id="unsubscribe-${discipline.id}" class="btn btn-default self-start hidden">Desincrever-se</button>
  </li>
  `;
});
allDisciplines.forEach(thisDiscipline => {
    const buttonSubscribe = document.getElementById(`${thisDiscipline.id}`);
    const buttonUnsubscribe = document.getElementById(`unsubscribe-${thisDiscipline.id}`);
    const isIncluded = thisDiscipline.idProfessor.includes(professor.id);
    if (isIncluded) {
        buttonSubscribe.classList.add("hidden");
        buttonUnsubscribe.classList.remove("hidden");
    }
    buttonSubscribe.addEventListener("click", async (event) => {
        event.preventDefault();
        const discipline = new Discipline(thisDiscipline);
        if (discipline.idProfessor[0]) {
            dialogOverlay.classList.remove("hidden");
        }
        // discipline.idProfessor.push(professor.id)
        // await putDiscipline(discipline)
        console.log("Professor inscrito na disciplina");
    });
    buttonUnsubscribe.addEventListener("click", async (event) => {
        event.preventDefault();
        const discipline = new Discipline(thisDiscipline);
        const disciplineFiltered = discipline.idProfessor.filter(thisIdProfessor => thisIdProfessor !== professor.id);
        discipline.idProfessor = disciplineFiltered;
        await putDiscipline(discipline);
        console.log("Professor desinscrito na disciplina");
    });
});
