import allSpecializations from "../../const/allSpecializations.js";
import { getAllDisciplines } from "../../controller/discipline/getDiscipline.js";
import { filteringDiscipline } from "./availableDisciplines.js";
const allDisciplines = await getAllDisciplines();
const optinsSelect = ["Todos", ...allSpecializations];
const selectTrigger = document.getElementById("select-specialization");
const selectContent = document.getElementById("select-content");
const btnFilter = document.getElementById("btn-filter");
const selectValue = document.getElementById("select-value");
const btnsTimePeriod = document.querySelectorAll("#btn-timePeriod");
const btnsFilterSubscribed = document.querySelectorAll("#filter-subscribed");
let timePeriodFilterValue = "Todos";
let subscribedFilterValue = "Todas";
handleButtonsFilter(btnsTimePeriod, "timePeriod");
handleButtonsFilter(btnsFilterSubscribed, "subscribed");
optinsSelect.forEach(thisSpecialization => {
    selectContent.innerHTML += `
        <p class="hover:bg-gray-100 px-3 py-2 rounded-lg text-sm">
            ${thisSpecialization}
        </p>
    `;
});
selectTrigger.addEventListener("click", event => {
    function removeListeners() {
        selectOverlay.removeEventListener("click", () => "");
        selectContent.removeEventListener("click", () => "");
    }
    const selectOverlay = document.getElementById("select-overlay");
    selectOverlay.classList.remove("hidden");
    selectContent.classList.remove("hidden");
    selectOverlay.addEventListener("click", event => {
        selectOverlay.classList.add("hidden");
        selectContent.classList.add("hidden");
        removeListeners();
    });
    selectContent.addEventListener("click", event => {
        selectOverlay.classList.add("hidden");
        selectContent.classList.add("hidden");
        const target = event.target;
        selectValue.innerHTML = target.innerText;
        removeListeners();
    });
});
btnFilter.addEventListener("click", event => {
    let filter = allDisciplines;
    const specializationValue = selectValue.innerText;
    if (specializationValue !== "Todos") {
        filter = filter.filter(discipline => discipline.specialization.includes(specializationValue));
    }
    if (timePeriodFilterValue !== "Todos") {
        filter = filter.filter(discipline => discipline.timePeriod === timePeriodFilterValue);
    }
    if (subscribedFilterValue !== "Todas") {
        if (subscribedFilterValue === "Nenhuma") {
            filter = filter.filter(discipline => discipline.idProfessor.length === 0);
        }
        else {
            filter = filter.filter(discipline => discipline.idProfessor.length !== 0);
        }
    }
    filteringDiscipline(filter);
});
function handleButtonsFilter(htmlButtons, typeFilterValue) {
    htmlButtons.forEach(thisButton => {
        thisButton.addEventListener("click", event => {
            thisButton.classList.add("border-green-300", "bg-green-50", "hover:bg-green-100");
            if (typeFilterValue === "timePeriod") {
                timePeriodFilterValue = thisButton.innerText = thisButton.innerText;
            }
            else if (typeFilterValue === "subscribed") {
                subscribedFilterValue = thisButton.innerText = thisButton.innerText;
            }
            htmlButtons.forEach(othersButtons => thisButton !== othersButtons ? othersButtons.classList.remove("border-green-300", "bg-green-50", "hover:bg-green-100") : "");
        });
    });
}
