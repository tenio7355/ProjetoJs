import { getSystem } from "../../../controller/system/getSystem.js";
import { returnTodayAndSystemDate } from "../../../utils/handleDate.js";
import System from "../../../classes/System.js";
import resolveConflictsMeeting from "../../../utils/resolveConflictsMeeting.js";
const statusColor = document.getElementById("meeting-status-color");
const statusText = document.getElementById("meeting-status-text");
const btnActionMeeting = document.getElementById("btn-action-meeting");
const system = new System(await getSystem());
const [today, formatToDate, systemDatePlus] = returnTodayAndSystemDate(system);
createStatusMeeting();
handleBtnActionMeeting();
function handleBtnActionMeeting() {
    if (!system.isMeeting) {
        btnActionMeeting.classList.add("btn-default");
        btnActionMeeting.innerText = "Visualizar Resultados";
        btnActionMeeting.addEventListener("click", event => {
            window.location.href = "../meetingResult/index.html";
        });
        return;
    }
    const isMeeting = !(today > systemDatePlus);
    btnActionMeeting.innerText = "Finalizar Reunião";
    if (isMeeting) {
        btnActionMeeting.classList.add("btn-outline", "cursor-not-allowed");
    }
    else {
        btnActionMeeting.classList.add("btn-default");
        btnActionMeeting.addEventListener("click", async (event) => {
            console.log("entrou");
            system.isMeeting = false;
            await resolveConflictsMeeting();
            // window.location.href = "../meetingResult/index.html"
        });
    }
}
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
