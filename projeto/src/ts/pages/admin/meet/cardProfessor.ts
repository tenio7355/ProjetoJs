import { getAllProfessor } from "../../../controller/professor/getProfessor.js"

const ulCardProfessor = document.getElementById("ul-card-professors")!

const allProfessors = await getAllProfessor()

allProfessors.forEach(professor => {
 const voted = professor.workLoad !== 0
  ulCardProfessor.innerHTML += `
  <li class="flex items-center justify-between px-4 py-2 border rounded-md">
    <div>
        <p class="font-medium">${professor.name} - ${professor.email}</p>
        <p>Carga horária: ${professor.workLoad} horas de 14 horas</p>
    </div>
    <p class="font-medium badge badge-outline ${voted? "text-green-600" : "text-red-600"} text-base">${voted ? "Votou" : "Não Votou"}</p>
  </li>
  `
})