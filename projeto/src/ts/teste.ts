import { getAllProfessor } from "../controller/getProfessor";

const allProfessors = await getAllProfessor()

const cpfInput = document.getElementById("cpf-input") as HTMLInputElement
const passwordInput = document.getElementById("password-input") as HTMLInputElement
const formLogin = document.getElementById("form-login")!

formLogin.addEventListener("submit", event=>{
  event.preventDefault()

  console.log("🚀 ~ cpfInput.value:", cpfInput.value)
  if(!cpfInput.value && !passwordInput.value){
  }
})