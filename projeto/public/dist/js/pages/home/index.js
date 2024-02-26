import Professor from "../../classes/Professor.js";
import { getAllDisciplines } from "../../controller/discipline/getDiscipline.js";
import { getSystem } from "../../controller/system/getSystem.js";
import currentProfessor from "../../utils/currentProfessor.js";
import { returnTodayAndSystemDate } from "../../utils/handleDate.js";
import { handleHeader } from "../../utils/handleHeader.js";
import { createLoading } from "../../utils/awaitPromisse.js";
const ulDiscipline = document.getElementById("ulDiscipline");
const currentWorload = document.getElementById("current-workload");
const alertView = document.getElementById("alert-view");
const titleAlert = document.getElementById("title-alert");
const subtitleAlert = document.getElementById("subtitle-alert");
const allDisciplines = await getAllDisciplines();
const system = await getSystem();
const professor = new Professor(await currentProfessor());
handleHeader(professor);
createTextAlertMeeting();
currentWorload.innerHTML = `${professor.workLoad}h de 14h semanais`;
await createLoading(ulDiscipline);
allDisciplines.forEach(async (discipline) => {
    const isIncluded = discipline.idProfessor.includes(professor.id);
    if (isIncluded) {
        ulDiscipline.innerHTML += ` 
      <li class="flex flex-col card px-7 space-y-3 justify-between">
        <div>
          <div class="flex justify-between">
            <h2 class="text-xl font-semibold">${discipline.nameCourse} - ${discipline.typeCourse} (${discipline.periodCourse})</h2>
            <p class="h-fit font-medium badge badge-outline">${discipline.timePeriod}</p>
          </div>
          <p>${discipline.discipline} - ${discipline.workLoad}h semanais</p>
        </div>
      </li>
    `;
    }
});
if (professor.workLoad === 0) {
    const noDisciplines = document.getElementById("noDisciplines");
    noDisciplines.innerHTML += ` 
      <div class="w-fit card">
        <p class="text-xl text-center">Você não está inscrito(a) em nenhuma aula!</p>
      </div>
    `;
}
function createTextAlertMeeting() {
    const [today, formatToDate, systemDatePlus] = returnTodayAndSystemDate(system);
    if (today > systemDatePlus) {
        alertView.classList.remove("alert-default");
        alertView.classList.add("alert-destructive");
        titleAlert.innerText = "Reunião encerrada!";
        subtitleAlert.innerHTML = `Você não pode mais alterar suas matérias. Reunião encerrada no dia: <span id="last-day-meeting" class="font-medium">25/02/2024</span>`;
    }
    else {
        alertView.classList.add("alert-default");
        alertView.classList.remove("alert-destructive");
        titleAlert.innerText = "Reunião em andamento!";
        subtitleAlert.innerHTML = `Você ainda pode alterar suas disciplinas até o dia: <span id="last-day-meeting" class="font-medium">25/02/2024</span> `;
    }
    const lastDayMeeting = document.getElementById("last-day-meeting");
    lastDayMeeting.innerHTML = formatToDate.format("DD/MM/YYYY");
}
