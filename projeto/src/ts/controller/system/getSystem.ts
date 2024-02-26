import { getSystemApi } from "../../service/sistemaService.js";
/** 
 * @function getAllProfessor busca array de professores do banco de dados
*/
export async function getSystem(){
  const system = await getSystemApi()
  return system
} 