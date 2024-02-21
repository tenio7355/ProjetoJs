import { getAllProfessorsApi, getProfessorApi } from "../service/professors";

export function getAllProfessor(){
  const allProfessors = getAllProfessorsApi()
  return allProfessors
}