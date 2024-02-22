import { getAllProfessor } from "../controller/professor/getProfessor.js";
import { getLocalStorageUser } from "./localStorageService.js";

const idUser = getLocalStorageUser()
const allProfessors = await getAllProfessor() 

if(idUser){
  const userFinded = allProfessors.find(professor=> professor.id === idUser)!
  if(!userFinded.isLoggedIn){
    window.location.href = "../login"
  }
} else {
  window.location.href = "../login"
}