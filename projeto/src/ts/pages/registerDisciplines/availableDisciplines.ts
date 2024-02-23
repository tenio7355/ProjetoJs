import Discipline from "../../classes/Discipline.js"
import { getAllDisciplines } from "../../controller/discipline/getDiscipline.js"
import { putDiscipline } from "../../controller/discipline/putDiscipline.js"
import { addSerchParamsUrl } from "../../utils/modifySearchParamsUrl.js"
import currentProfessor from "../../utils/currentProfessor.js"
import { putProfessor } from "../../controller/professor/putProfessor.js"
import Professor from "../../classes/Professor.js"

const allDisciplines = await getAllDisciplines()
const professor = new Professor(await currentProfessor())

const ulDiscipline = document.getElementById("ulDiscipline")!
const dialogOverlay = document.getElementById(`dialog-overlay`)!
let idTimeOut: NodeJS.Timeout | undefined

allDisciplines.forEach(discipline => {

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
  `
})

allDisciplines.forEach(thisDiscipline => {

  const buttonSubscribe = document.getElementById(`${thisDiscipline.id}`) as HTMLElement
  const buttonUnsubscribe = document.getElementById(`unsubscribe-${thisDiscipline.id}`) as HTMLElement
  const isIncluded = thisDiscipline.idProfessor.includes(professor.id)

  if (isIncluded) {
    buttonSubscribe.classList.add("hidden")
    buttonUnsubscribe.classList.remove("hidden")
  }

  buttonSubscribe.addEventListener("click", async event => {
    const wordLoadLimit = professor.isCoodinator ? 10 : 14
    const discipline = new Discipline(thisDiscipline)
    const toastOverlay = document.getElementById("toast-overlay")!
    const toastContent = document.getElementById("toast-content")!

    if (professor.workLoad + discipline.workLoad > wordLoadLimit) {
      toastContent.innerHTML = `
      <div class="flex flex-col">
      <h3 class="text-lg font-medium">Inscrição não realizada!</h3>
      <p>Essa disciplina ultrapassa sua carga horária disponível.</p>
      </div>
      `

      toastContent.classList.remove("hidden")
      toastContent.classList.add("toast-destructive")
      if (!idTimeOut) {
        idTimeOut = setTimeout(() => hiddenToast(toastOverlay, toastContent), 3000)
      }
      return;
    }

    if (discipline.idProfessor[0]) {
      addSerchParamsUrl("idDiscipline", discipline.id)
      dialogOverlay.classList.remove("hidden")
    } else {
      discipline.idProfessor.push(professor.id)
      professor.workLoad += discipline.workLoad

      await putProfessor(professor)
      await putDiscipline(discipline)
    }
  })

  buttonUnsubscribe.addEventListener("click", async event => {

    const discipline = new Discipline(thisDiscipline)
    const disciplineFiltered = discipline.idProfessor.filter(thisIdProfessor => thisIdProfessor !== professor.id)

    discipline.idProfessor = disciplineFiltered
    professor.workLoad -= discipline.workLoad

    await putProfessor(professor)
    await putDiscipline(discipline)
  })

  function hiddenToast(toastOverlay: HTMLElement, toastContent: HTMLElement) {
    toastContent.classList.remove("toast-destructive")
    toastContent.classList.add("hidden")
    idTimeOut = undefined
  }
})