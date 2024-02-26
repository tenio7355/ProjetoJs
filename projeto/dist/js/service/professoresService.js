const endpoint = "http://localhost:3000/professores";
const applicationJson = { 'Content-Type': 'application/json' };
export async function getProfessorApi(idProfessor) {
    const response = await (await fetch(`${endpoint}/${idProfessor}`)).json();
    return response.data;
}
export async function getAllProfessorsApi() {
    const response = await (await fetch(`${endpoint}`)).json();
    return response;
}
export async function putProfessorApi(data) {
    const result = await fetch(`${endpoint}/${data.id}`, {
        method: 'PUT',
        headers: applicationJson,
        body: JSON.stringify(data.informations())
    });
}
export async function putTwoApi(data, dataDisciplines) {
    await fetch(`${endpoint}/${data.id}`, {
        method: 'PUT',
        headers: applicationJson,
        body: JSON.stringify(data.informations())
    });
    await fetch(`${endpoint}/${dataDisciplines.id}`, {
        method: 'PUT',
        headers: applicationJson,
        body: JSON.stringify(dataDisciplines.informations())
    });
}
