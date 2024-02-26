import System from "../../classes/System.js"
import { putSystemApi } from "../../service/sistemaService.js"

export async function putSystem(system: System){
  await putSystemApi(system) 
}
