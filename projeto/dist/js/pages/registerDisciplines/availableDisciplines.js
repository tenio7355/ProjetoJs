import Discipline from "../../classes/Discipline.js";
import { getAllDisciplines } from "../../controller/discipline/getDiscipline.js";
import { putDiscipline } from "../../controller/discipline/putDiscipline.js";
import { addSerchParamsUrl } from "../../utils/modifySearchParamsUrl.js";
import currentProfessor from "../../utils/currentProfessor.js";
import { putProfessor } from "../../controller/professor/putProfessor.js";
import Professor from "../../classes/Professor.js";
import { returnTodayAndSystemDate } from "../../utils/handleDate.js";
import { getSystem } from "../../controller/system/getSystem.js";
import { createLoading } from "../../utils/awaitPromisse.js";
const allDisciplines = await getAllDisciplines();
let filteredDisciplines = allDisciplines;
const professor = new Professor(await currentProfessor());
const ulDiscipline = document.getElementById("ulDiscipline");
const dialogOverlay = document.getElementById(`dialog-overlay`);
let idTimeOut;
const system = await getSystem();
const [today, formatToDate, systemDatePlus] = returnTodayAndSystemDate(system);
await createLoading(ulDiscipline, 1200);
creatCards();
function creatCards() {
    ulDiscipline.innerHTML = "";
    if (!filteredDisciplines[0]) {
        ulDiscipline.innerHTML = `
    <div class="flex w-full justify-center col-span-2">
    <p class="h-fit text-xl font-medium badge badge-outline">Nenhum resultado foi encontrado!</p>
    </div>
    `;
        return;
    }
    // CARDS SUBSCRIBED DISCIPLINES
    filteredDisciplines.forEach(discipline => {
        if (discipline.idProfessor.includes(professor.id)) {
            ulDiscipline.innerHTML += ` 
      <li class="flex flex-col card px-7 space-y-3 justify-between">
        <div>
          <div class="flex justify-between ">
            <h2 class="text-xl font-semibold">${discipline.nameCourse} - ${discipline.typeCourse} (${discipline.periodCourse})</h2> 
            <p class="h-fit text-sm font-medium badge badge-outline">${discipline.timePeriod}</p> 
          </div>
          <p>${discipline.discipline} - ${discipline.workLoad}h semanais</p>
        </div>
        <button id="${discipline.id}" class="btn btn-default self-start">Inscrever-se</button>
        <button id="unsubscribe-${discipline.id}" class="btn btn-outline self-start hidden">Desincrever-se</button>
        </li>
        `;
        }
    });
    // CARDS UNSUBSCRIBED DISCIPLINES
    filteredDisciplines.forEach(discipline => {
        if (!discipline.idProfessor.includes(professor.id)) {
            ulDiscipline.innerHTML += ` 
      <li class="flex flex-col card px-7 space-y-3 justify-between">
        <div>
          <div class="flex justify-between ">
            <h2 class="text-xl font-semibold">${discipline.nameCourse} - ${discipline.typeCourse} (${discipline.periodCourse})</h2> 
            <p class="h-fit text-sm font-medium badge badge-outline">${discipline.timePeriod}</p> 
          </div>
          <p>${discipline.discipline} - ${discipline.workLoad}h semanais</p>
        </div>
        <button id="${discipline.id}" class="btn btn-default self-start">Inscrever-se</button>
        <button id="unsubscribe-${discipline.id}" class="btn btn-outline self-start hidden">Desincrever-se</button>
      </li>
      `;
        }
    });
    //LISTENER SUBSCRIBE/UNSUBSCRIBE DISCIPLINES
    filteredDisciplines.forEach(thisDiscipline => {
        const buttonSubscribe = document.getElementById(`${thisDiscipline.id}`);
        const buttonUnsubscribe = document.getElementById(`unsubscribe-${thisDiscipline.id}`);
        const isIncluded = thisDiscipline.idProfessor.includes(professor.id);
        if (isIncluded) {
            buttonSubscribe.classList.add("hidden");
            buttonUnsubscribe.classList.remove("hidden");
        }
        buttonSubscribe.addEventListener("click", async (event) => {
            const wordLoadLimit = professor.isCoordinator ? 10 : 14;
            const discipline = new Discipline(thisDiscipline);
            const toastOverlay = document.getElementById("toast-overlay");
            const toastContent = document.getElementById("toast-content");
            const canSubscribe = verifyIfCanSubscribe(toastOverlay, toastContent);
            if (!canSubscribe) {
                return;
            }
            if (professor.workLoad + discipline.workLoad > wordLoadLimit) {
                toastContent.innerHTML = `
        <div class="flex flex-col">
          <h3 class="text-lg font-medium">Inscrição não realizada!</h3>
          <p>Essa disciplina ultrapassa sua carga horária disponível.</p>
        </div>
      `;
                showToastDestructive(toastOverlay, toastContent);
                return;
            }
            if (discipline.idProfessor[0]) {
                addSerchParamsUrl("idDiscipline", discipline.id);
                dialogOverlay.classList.remove("hidden");
                toastContent.classList.add("toast-destructive");
            }
            else {
                discipline.idProfessor.push(professor.id);
                professor.workLoad += discipline.workLoad;
                await putProfessor(professor);
                await putDiscipline(discipline);
            }
        });
        buttonUnsubscribe.addEventListener("click", async (event) => {
            const toastOverlay = document.getElementById("toast-overlay");
            const toastContent = document.getElementById("toast-content");
            const discipline = new Discipline(thisDiscipline);
            const disciplineFiltered = discipline.idProfessor.filter(thisIdProfessor => thisIdProfessor !== professor.id);
            const canSubscribe = verifyIfCanSubscribe(toastOverlay, toastContent);
            if (!canSubscribe) {
                return;
            }
            discipline.idProfessor = disciplineFiltered;
            professor.workLoad -= discipline.workLoad;
            await putProfessor(professor);
            await putDiscipline(discipline);
        });
    });
}
function verifyIfCanSubscribe(toastOverlay, toastContent) {
    if (today > systemDatePlus) {
        toastContent.innerHTML = `
      <div class="flex flex-col">
        <h3 class="text-lg font-medium">Inscrição não realizada!</h3>
        <p>Período de inscrição finalizado.</p>
      </div>
      `;
        showToastDestructive(toastOverlay, toastContent);
        return false;
    }
    else {
        return true;
    }
}
function showToastDestructive(toastOverlay, toastContent) {
    toastOverlay.classList.remove("hidden");
    toastContent.classList.add("toast-destructive");
    if (!idTimeOut) {
        idTimeOut = setTimeout(() => hiddenToast(toastOverlay, toastContent), 3000);
    }
}
function hiddenToast(toastOverlay, toastContent) {
    toastOverlay.classList.add("hidden");
    toastContent.classList.remove("toast-destructive");
    idTimeOut = undefined;
}
export async function filteringDiscipline(newFilter) {
    filteredDisciplines = newFilter;
    ulDiscipline.innerHTML = "";
    await createLoading(ulDiscipline, 1200);
    creatCards();
}
