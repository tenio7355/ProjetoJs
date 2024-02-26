import ISystem from "../../interface/ISystem.js"
import { putSystemApi } from "../../service/sistemaService.js"

export async function putSystem(system: ISystem){
  await putSystemApi(system) 
}
