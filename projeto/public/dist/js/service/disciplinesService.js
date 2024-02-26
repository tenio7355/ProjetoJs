const endpoint = "http://localhost:3000/disciplinas";
const applicationJson = { 'Content-Type': 'application/json' };
export async function getDisciplineApi(idDiscipline) {
    const response = await (await fetch(`${endpoint}/${idDiscipline}`)).json();
    return response.data;
}
export async function getAllDisciplinesApi() {
    const response = await (await fetch(`${endpoint}`)).json();
    return response;
}
export async function putDisciplineApi(data) {
    const result = await fetch(`${endpoint}/${data.id}`, {
        method: 'PUT',
        headers: applicationJson,
        body: JSON.stringify(data.informations())
    });
}
