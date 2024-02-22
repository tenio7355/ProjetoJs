const endpoint = "http://localhost:3000/professor";
const applicationJson = { 'Content-Type': 'application/json' };
export async function getProfessorApi(idProfessor) {
    const response = await (await fetch(`${endpoint}/${idProfessor}`)).json();
    return response.data;
}
export async function getAllProfessorsApi() {
    const response = await (await fetch(`${endpoint}`)).json();
    return response;
}
export async function postProfessorApi(data) {
    const result = await fetch(`${endpoint}/${data.id}`, {
        method: 'PUT',
        headers: applicationJson,
        body: JSON.stringify(data.informations())
    });
    console.log("🚀 ~ postProfessorApi ~ result:", result);
}
