const endpoint = "http://localhost:3000/sistema";
const applicationJson = { 'Content-Type': 'application/json' };
export async function getSystemApi() {
    const response = await (await fetch(`${endpoint}/`)).json();
    return response;
}
export async function putSystemApi(data) {
    const result = await fetch(`${endpoint}/`, {
        method: 'PUT',
        headers: applicationJson,
        body: JSON.stringify(data.informations())
    });
}
