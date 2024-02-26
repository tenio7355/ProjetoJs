import { getAllDisciplines } from "../../../controller/discipline/getDiscipline.js";
import { getAllProfessor } from "../../../controller/professor/getProfessor.js";
import { getSystem } from "../../../controller/system/getSystem.js";
import { returnTodayAndSystemDate } from "../../../utils/handleDate.js";
const statusColor = document.getElementById("meeting-status-color");
const statusText = document.getElementById("meeting-status-text");
const professorVoted = document.getElementById("professor-voted");
const disciplineVoted = document.getElementById("discipline-voted");
const endMeeting = document.getElementById("end-meeting");
const system = await getSystem();
const allDisciplines = await getAllDisciplines();
const allProfessors = await getAllProfessor();
const [today, formatToDate, systemDatePlus] = returnTodayAndSystemDate(system);
const arrayDisciplineVoted = allDisciplines.filter(discipline => discipline.idProfessor.length > 0);
const arrayProfessorVoted = allProfessors.filter(professor => professor.workLoad > 0);
professorVoted.innerText = `${arrayProfessorVoted.length} de ${allProfessors.length} professores votaram`;
disciplineVoted.innerText = `${arrayDisciplineVoted.length} de ${allDisciplines.length} disciplinas foram escolhidas`;
endMeeting.innerText = `Reunião termina dia: ${formatToDate.format("DD/MM/YYYY")}`;
createStatusMeeting();
function createStatusMeeting() {
    if (system.isMeeting) {
        statusColor.classList.add("bg-green-500", "animate-pulse");
        statusColor.classList.remove("bg-red-500");
        statusColor.classList.remove("bg-gray-500");
        statusText.innerText = `Em andamento... (Término em ${formatToDate.format("DD/MM/YYYY")})`;
    }
    else {
        statusColor.classList.add("bg-red-500");
        statusColor.classList.remove("bg-gray-500");
        statusColor.classList.remove("bg-green-500", "animate-pulse");
        statusText.innerText = "Encerrado";
        return;
    }
    if (today > systemDatePlus) {
        statusColor.classList.add("bg-gray-500");
        statusColor.classList.remove("bg-red-500");
        statusColor.classList.remove("bg-green-500", "animate-pulse");
        statusText.innerText = `Finalizado em (${formatToDate.format("DD/MM/YYYY")})`;
    }
}
