import Professor from "../../classes/Professor.js"
import { putProfessorApi } from "../../service/professoresService.js"

export async function putProfessor(professor: Professor){
  await putProfessorApi(professor) 
}
