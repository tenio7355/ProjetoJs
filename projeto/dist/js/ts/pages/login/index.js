import { getAllProfessor } from "../../controller/getProfessor.js";
/**
 * @constant allProfessors busca array de professores do banco de dados
*/
const allProfessors = await getAllProfessor();
const cpfInput = document.getElementById("cpf-input");
const passwordInput = document.getElementById("password-input");
const formLogin = document.getElementById("form-login");
formLogin.addEventListener("submit", event => {
    event.preventDefault();
    if (cpfInput.value !== "" && passwordInput.value !== "") {
        const findedEmail = allProfessors.find(professor => cpfInput.value === professor.email);
        //    pedro.costa@example.com 
        if (findedEmail) {
            const passwordMatched = findedEmail.senha === passwordInput.value;
            // senhadef
            if (passwordMatched) {
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
