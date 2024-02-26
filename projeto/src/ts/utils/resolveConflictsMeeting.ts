import Discipline from "../classes/Discipline.js"
import Professor from "../classes/Professor.js"
import System from "../classes/System.js"
import { getAllDisciplines } from "../controller/discipline/getDiscipline.js"
import { putDiscipline } from "../controller/discipline/putDiscipline.js"
import { getAllProfessor } from "../controller/professor/getProfessor.js"
import { putProfessor } from "../controller/professor/putProfessor.js"
import { getSystem } from "../controller/system/getSystem.js"
import IDiscipline from "../interface/IDiscipline.js"
import IProfessor from "../interface/IProfessor.js"
import constructPreviousClasses from "./contructPreviousClasses.js"
/*
precisa estar dentro da carga horária permitida (feito)
precisa escolher aleatoriamente os que tem menos carga horária (feito)

falta ajeitar a carga horária dos professores não inseridos na disciplinas e ajeitar os dos que forem sendo inseridos (feito)

fazer if caso não haja mais professores para iterar (feito)

adicionar previous classes

*/

interface IProfessorConflict { idProfessor: string, points: number }[]
interface IProfessorAvailible { professor: Professor, points: number }[]

export default async function resolveConflictsMeeting() {
  const system = new System(await getSystem())
  const allProfessors = await getAllProfessor()
  const allDisciplines = await getAllDisciplines()

  console.log("+1");
  //itera sobre disciplinas com +1 votos
  allDisciplines.forEach(thisDiscipline => {

    const discipline = new Discipline(thisDiscipline)
    if (discipline.idProfessor.length > 1) {

      //array de professores em conflito
      const professorsInConflict = [] as IProfessorConflict[]
      discipline.idProfessor.forEach(idProfessor => {
        professorsInConflict.push({ idProfessor: idProfessor, points: 0 })
      })
      if (professorsInConflict.length === 0) {
        console.log("Sem mais professores disponíveis");
        return;
      }

      const professorsWithPoints = professorsInConflict.map(conflictProfessor => {
        const professorFound = allProfessors.find(thisProfessor => thisProfessor.id === conflictProfessor.idProfessor)!
        const professor = new Professor(professorFound)

        //verifica carga horária
        const maxWorkLoad = professor.isCoordinator ? 10 : 14
        if (professor.workLoad + thisDiscipline.workLoad > maxWorkLoad) {
          //cancela operação desse professor pois sua carga horária já excedeu
          return conflictProfessor
        }
        conflictProfessor.points += addPointsToProfessor(professor, discipline)
        return conflictProfessor
      })
      sortAndSaveProfessorInDiscipline(discipline, professorsWithPoints, "conflict")

      alterProfessors(discipline, professorsWithPoints)
    }
  })

  console.log("0");
  //itera sobre disciplinas com 0 votos
  allDisciplines.forEach(thisDiscipline => {
    const discipline = new Discipline(thisDiscipline)

    if (discipline.idProfessor.length === 0) {

      const professorsAvailableArray = [] as IProfessorAvailible[]

      allProfessors.forEach(thisProfessor => {
        const isReachedWorkLoad = reachedWorkLoad(thisProfessor, discipline)
        if (!isReachedWorkLoad) {
          const professor = new Professor(thisProfessor)
          professorsAvailableArray.push({ professor, points: 0 })
        }
      })
      if (professorsAvailableArray.length === 0) {
        console.log("Sem mais professores disponíveis");
        return;
      }

      const professorsWithPoints = professorsAvailableArray.map(professorAvailable => {
        //retorna true caso todos os elementos desse array tenham a carga horária maior que a do professor atual iterando
        const isSmallerWorkLoad = professorsAvailableArray.every(thisProfessor => {
          const currentProfessorWorkLoad = professorAvailable.professor.workLoad
          const arrayProfessorWorLoad = thisProfessor.professor.workLoad

          if (currentProfessorWorkLoad < arrayProfessorWorLoad) {
            return true
          }
        })
        if (isSmallerWorkLoad) {
          professorAvailable.points += 3
        }

        professorAvailable.points += addPointsToProfessor(professorAvailable.professor, discipline)
        return professorAvailable
      })
      sortAndSaveProfessorInDiscipline(discipline, professorsWithPoints, "available")

      alterProfessors(discipline)
    }
  })

  await saveOnDataBase()


  /**
  * Salva atualizações das tabelas no bando de dados
  */
  async function saveOnDataBase() {
    allProfessors.forEach(async element => {
      const professor = new Professor(element)
      await putProfessor(professor)
    });
    allDisciplines.forEach(async element => {
      const discipline = new Discipline(element)
      console.log("🚀 ~ saveOnDataBase ~ discipline:", discipline)
      await putDiscipline(discipline)
    });
  }

  /**
  * Faz o sort e o save do id do professor escolhido na disciplina
  * @param discipline disciplina atual do tipo Discipline
  * @param professorsArray array de professores do tipo IProfessorAvailible[] ou IProfessorConflict[]
  * @param typeSave decide o modo que será salvo as informações
  */
  function alterProfessors(discipline: IDiscipline, professorsInConflict?: IProfessorConflict[]) {
    if (professorsInConflict)
      professorsInConflict.forEach(thisProfessor => {
        if (thisProfessor.idProfessor !== discipline.idProfessor[0]) {
          const professorFound = allProfessors.find(current => current.id === thisProfessor.idProfessor)!
          const professor = new Professor(professorFound)
          professor.workLoad -= discipline.workLoad
        }
      })
    const professorFound = allProfessors.find(thisProfessor => thisProfessor.id === discipline.idProfessor[0])!
    const professorFoundIndex = allProfessors.findIndex(thisProfessor => thisProfessor.id === discipline.idProfessor[0])!
    const professor = new Professor(professorFound)
    professor.workLoad += discipline.workLoad
    professor.previousClasses.push(constructPreviousClasses(discipline.nameCourse, discipline.periodCourse))
    allProfessors.splice(professorFoundIndex, 1, professor.informations())
  }

  /**
  * Faz o sort e o save do id do professor escolhido na disciplina
  * @param discipline disciplina atual do tipo Discipline
  * @param professorsArray array de professores do tipo IProfessorAvailible[] ou IProfessorConflict[]
  * @param typeSave decide o modo que será salvo as informações
  */
  function sortAndSaveProfessorInDiscipline(discipline: Discipline, professorsArray: IProfessorAvailible[] | IProfessorConflict[], typeSave: "conflict" | "available") {

    //reduz o array em um retorno com o maior valor do array
    const maxPoint = professorsArray.reduce(
      (lastProfessor, currentProfessor) => currentProfessor.points > lastProfessor.points ? currentProfessor : lastProfessor)

    //verifica a existência de professores com mesmo valor máximo
    const arrayProfessorsMaxPoints = professorsArray.filter(thisProfessor => thisProfessor.points === maxPoint.points) as IProfessorAvailible[] | IProfessorConflict[]

    if (typeSave === "conflict") {
      const professorWinner = sortProfessor(arrayProfessorsMaxPoints) as IProfessorConflict
      discipline.idProfessor = [professorWinner.idProfessor]
    } else if (typeSave === "available") {
      const professorWinner = sortProfessor(arrayProfessorsMaxPoints) as IProfessorAvailible
      discipline.idProfessor = [professorWinner.professor.id]
    }
  }

  /**
  * Calcula e retorna a quantidade de pontos formados do professor
  * @param currentProfessor professor atual do tipo Professor
  * @param discipline disciplina atual do tipo Disciplina
  * @returns quantidade de pontos formados
  */
  function addPointsToProfessor(currentProfessor: Professor, currentDiscipline: Discipline) {
    let points = 0
    currentDiscipline.specialization.forEach(specialization => {
      const haveSpecialization = currentProfessor.specialization.includes(specialization)
      if (haveSpecialization) {
        points += 3
      }
    })

    const isPreferenceShift = currentProfessor.shiftPreference.includes(currentDiscipline.timePeriod)
    if (isPreferenceShift) {
      points += 1
    }

    const isPreviousClasses = currentProfessor.previousClasses.includes(constructPreviousClasses(currentDiscipline.nameCourse, currentDiscipline.periodCourse))
    if (isPreviousClasses) {
      points += 1
    }
    return points
  }

  /**
   * Sorteia um elemento aleatório do array inserido
   * @param array array do tipo IProfessorConflict
   * @returns IProfessorConflict | IProfessorAvailible
   */
  function sortProfessor(array: IProfessorConflict[] | IProfessorAvailible[]) {
    const indiceSorteado = Math.round(Math.random() * (array.length - 1));
    return array[indiceSorteado]
  }

  /**
   * Verifica se o professor atingiu a carga horária
   * @param professor professor do tipo Professor
   * @param discipline disciplina do tipo IDiscipline
   * @returns atingiu carga horária (true) ou não (false)
   */
  function reachedWorkLoad(professor: IProfessor, discipline: IDiscipline) {
    const maxWorkLoad = professor.isCoordinator ? 10 : 14
    if (professor.workLoad + discipline.workLoad > maxWorkLoad) {
      return true
    }
    return false
  }
}


