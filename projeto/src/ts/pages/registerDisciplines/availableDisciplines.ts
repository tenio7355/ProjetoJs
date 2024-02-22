import { getAllDisciplines } from "../../controller/discipline/getDiscipline.js"

const allDisciplines = await getAllDisciplines()
const ulDiscipline = document.getElementById("ulDiscipline")!

allDisciplines.forEach(discipline=> {
  
  ulDiscipline.innerHTML += ` 
  <li class="flex flex-col card space-y-3 justify-between">
    <div>
      <div class="flex  justify-between">
        <h2 class="text-xl font-semibold">${discipline.nameCourse} - ${discipline.typeCourse} (${discipline.periodCourse})</h2> 
        <p class="h-fit text-sm font-medium badge badge-outline">${discipline.timePeriod}</p> 
      </div>
      <p>${discipline.discipline} - ${discipline.workLoad}h semanais</p>
    </div>
    <button id="${discipline.id}" class="btn btn-default self-start">Inscrever-se</button>
  </li>
  `
})
allDisciplines.forEach(discipline=> {
  const buttonSignIn = document.getElementById(`${discipline.id}`) as HTMLElement
  buttonSignIn.addEventListener("click", event => {
    buttonSignIn.id
  })
})