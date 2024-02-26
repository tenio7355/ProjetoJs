import { putDisciplineApi } from "../../service/disciplinesService.js";
export async function putDiscipline(discipline) {
    await putDisciplineApi(discipline);
}
