import ISystem from "../interface/ISystem.js"

const endpoint = "http://localhost:3000/sistema"
const applicationJson = { 'Content-Type': 'application/json' }

export async function getSystemApi() {
  const response = await (await fetch(`${endpoint}/`)).json()
  return response.data
}

export async function putSystemApi(data: ISystem) {
  const result = await fetch(`${endpoint}/`, {
    method: 'PUT',
    headers: applicationJson,
    body: JSON.stringify(data)
  })
}
