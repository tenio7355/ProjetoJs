import Admin from "../classes/Admin.js"
import IAdmin from "../interface/IAdmin.js"

const endpoint = "http://localhost:3000/administrador"
const applicationJson = { 'Content-Type': 'application/json' }

export async function getAdminApi() {
  const response = await (await fetch(`${endpoint}/`)).json()
  return response as IAdmin
}

export async function putAdminApi(data: Admin) {
  const result = await fetch(`${endpoint}/`, {
    method: 'PUT',
    headers: applicationJson,
    body: JSON.stringify(data.informations())
  })
}
