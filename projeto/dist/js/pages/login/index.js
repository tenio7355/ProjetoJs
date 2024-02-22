import Professor from "../../classes/Professor.js";
import { getAllProfessor } from "../../controller/professor/getProfessor.js";
import { postProfessor } from "../../controller/professor/postProfessor.js";
import { setLocalStorageUser } from "../../utils/localStorageService.js";
const allProfessors = await getAllProfessor();
const cpfInput = document.getElementById("cpf-input");
const passwordInput = document.getElementById("password-input");
const formLogin = document.getElementById("form-login");
formLogin.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (cpfInput.value !== "" && passwordInput.value !== "") {
        const findedEmail = allProfessors.find(professor => cpfInput.value === professor.email);
        if (findedEmail) {
            const passwordMatched = findedEmail.password === passwordInput.value;
            if (passwordMatched) {
                const professor = new Professor(findedEmail);
                professor.isLoggedIn = true;
                setLocalStorageUser(professor.id);
                await postProfessor(professor);
                window.location.href = "../home";
            }
            else {
                console.log("Senha incorreta");
            }
        }
        else {
            console.log("Email não encontrado");
        }
    }
});
