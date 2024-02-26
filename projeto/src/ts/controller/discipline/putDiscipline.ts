import Discipline from "../../classes/Discipline.js"
import { putDisciplineApi } from "../../service/disciplinesService.js"

export async function putDiscipline(discipline: Discipline){
  await putDisciplineApi(discipline) 
}

