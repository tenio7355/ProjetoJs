import axios from "axios";

export async function getProfessorApi(idProfessor: number){
  const endpoint = "http://localhost:3000/professor"
  const response = await axios.get(`${endpoint}/${idProfessor}`)
  return response.data
}
export async function getAllProfessorsApi(){
  const endpoint = "http://localhost:3000/professor"
  const response = await axios.get(`${endpoint}/`)
  return response.data
}
