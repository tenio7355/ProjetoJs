import Professor from "../../classes/Professor.js"
import { postProfessorApi } from "../../service/professoresService.js"

export async function postProfessor(professor: Professor){
  await postProfessorApi(professor) 
}
