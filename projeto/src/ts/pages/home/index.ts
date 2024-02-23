import Professor from "../../classes/Professor.js"
import { getAllDisciplines } from "../../controller/discipline/getDiscipline.js"
import currentProfessor from "../../utils/currentProfessor.js"

const ulDiscipline = document.getElementById("ulDiscipline")!
const allDisciplines = await getAllDisciplines()
const professor = new Professor(await currentProfessor())

allDisciplines.forEach(discipline => {

  const isIncluded = discipline.idProfessor.includes(professor.id)

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
    `
  }
})

if(professor.workLoad === 0){
  const noDisciplines = document.getElementById("noDisciplines")!
  noDisciplines.innerHTML += ` 
      <div class="w-fit card">
        <p class="text-xl text-center">Você não está inscrito em nenhuma aula!</p>
      </div>
    `
}
