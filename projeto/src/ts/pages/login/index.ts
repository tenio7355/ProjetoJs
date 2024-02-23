import Professor from "../../classes/Professor.js";
import { getAllProfessor } from "../../controller/professor/getProfessor.js";
import { putProfessor } from "../../controller/professor/putProfessor.js";
import { setLocalStorageProfessor } from "../../utils/localStorageService.js";


const allProfessors = await getAllProfessor() 

const cpfInput = document.getElementById("cpf-input") as HTMLInputElement
const passwordInput = document.getElementById("password-input") as HTMLInputElement
const formLogin = document.getElementById("form-login") as HTMLFormElement

formLogin.addEventListener("submit", async event=>{
  event.preventDefault()
  if(cpfInput.value !== "" && passwordInput.value !== ""){
    const findedEmail = allProfessors.find(professor=> cpfInput.value === professor.email)
    if(findedEmail){
      const passwordMatched = findedEmail.password === passwordInput.value
      if(passwordMatched){
        const professor = new Professor(findedEmail)
        professor.isLoggedIn = true
        setLocalStorageProfessor(professor.id)
        await putProfessor(professor)
        window.location.href = "../home"
      } else {
        console.log("Senha incorreta");
      }
    } else {
      console.log("Email não encontrado");
    } 
  }
})