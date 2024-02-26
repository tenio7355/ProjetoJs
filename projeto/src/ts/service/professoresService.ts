import Discipline from "../classes/Discipline.js"
import Professor from "../classes/Professor.js"
import IProfessor from "../interface/IProfessor.js"

const endpoint = "http://localhost:3000/professores"
const applicationJson = { 'Content-Type': 'application/json' }

export async function getProfessorApi(idProfessor: number) {
  const response = await (await fetch(`${endpoint}/${idProfessor}`)).json()
  return response.data
}
export async function getAllProfessorsApi() {
  const response = await (await fetch(`${endpoint}`)).json()
  return response as IProfessor[]
}

export async function putProfessorApi(data: Professor) {
  const result = await fetch(`${endpoint}/${data.id}`, {
    method: 'PUT',
    headers: applicationJson,
    body: JSON.stringify(data.informations())
  })
}
export async function putTwoApi(data: Professor, dataDisciplines: Discipline) {
  await fetch(`${endpoint}/${data.id}`, {
    method: 'PUT',
    headers: applicationJson,
    body: JSON.stringify(data.informations())
  })
  await fetch(`${endpoint}/${dataDisciplines.id}`, {
    method: 'PUT',
    headers: applicationJson,
    body: JSON.stringify(dataDisciplines.informations())
  })
}
