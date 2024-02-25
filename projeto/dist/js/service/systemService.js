const endpoint = "http://localhost:3000/professores";
const applicationJson = { 'Content-Type': 'application/json' };
export async function getSystemApi() {
    const response = await (await fetch(`${endpoint}/`)).json();
    return response.data;
}
export async function putSystemApi(data) {
    const result = await fetch(`${endpoint}/`, {
        method: 'PUT',
        headers: applicationJson,
        body: JSON.stringify(data.informations())
    });
}
