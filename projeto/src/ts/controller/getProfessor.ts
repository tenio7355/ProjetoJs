import { getAllProfessorsApi, getProfessorApi } from "../../service/professores.js";

export async function getAllProfessor(){
  const allProfessors = getAllProfessorsApi()
  return allProfessors
} 