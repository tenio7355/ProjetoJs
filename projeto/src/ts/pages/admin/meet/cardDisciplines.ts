import { getAllDisciplines } from "../../../controller/discipline/getDiscipline.js"

const ulCardProfessor = document.getElementById("ul-card-disciplines")!

const allDisciplines = await getAllDisciplines()

allDisciplines.forEach(discipline => {
 const voted = discipline.workLoad !== 0
 const qtdVotes = discipline.idProfessor.length
  ulCardProfessor.innerHTML += `
  <li class="flex items-center justify-between px-4 py-2 border rounded-md">
    <div class="flex flex-col">
      <p class="font-medium">
        ${discipline.nameCourse} - ${discipline.periodCourse} (${discipline.timePeriod})
      </p>
      <p>${discipline.discipline}</p>
    </div>
    <p class="badge badge-outline font-medium text-base">${qtdVotes} ${qtdVotes === 1 ? "Voto" : "Votos"}</p>
  </li>
  `
})