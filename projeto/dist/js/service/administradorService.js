const endpoint = "http://localhost:3000/administrador";
const applicationJson = { 'Content-Type': 'application/json' };
export async function getAdminApi() {
    const response = await (await fetch(`${endpoint}/`)).json();
    return response;
}
export async function putAdminApi(data) {
    const result = await fetch(`${endpoint}/`, {
        method: 'PUT',
        headers: applicationJson,
        body: JSON.stringify(data.informations())
    });
}
