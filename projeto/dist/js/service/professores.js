export async function getProfessorApi(idProfessor) {
    const endpoint = "http://localhost:3000/professor";
    const response = await (await fetch(`${endpoint}/${idProfessor}`)).json();
    return response.data;
}
export async function getAllProfessorsApi() {
    const endpoint = "http://localhost:3000/professor";
    const response = await (await fetch(`${endpoint}/`)).json();
    return response;
}
