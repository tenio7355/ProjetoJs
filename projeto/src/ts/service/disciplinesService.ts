import IDiscipline from "../interface/IDiscipline.js"

const endpoint = "http://localhost:3000/disciplinas"
const applicationJson = { 'Content-Type': 'application/json' }

export async function getDisciplineApi(idDiscipline: number) {
  const response = await (await fetch(`${endpoint}/${idDiscipline}`)).json()
  return response.data
}
export async function getAllDisciplinesApi() {
  const response = await (await fetch(`${endpoint}`)).json()
  return response as IDiscipline[]
}

// export async function postProfessorApi(data: Professor) {
//   const result = await fetch(`${endpoint}/${data.id}`, {
//     method: 'PUT',
//     headers: applicationJson,
//     body: JSON.stringify(data.informations())
//   })
//   console.log("🚀 ~ postProfessorApi ~ result:", result)
// }
