import Admin from "../../../classes/Admin.js";
import { getAdmin } from "../../../controller/admin/getAdmin.js";
import { putAdmin } from "../../../controller/admin/putAdmin.js";
const admin = new Admin(await getAdmin());
const emailInput = document.getElementById("cpf-input");
const passwordInput = document.getElementById("password-input");
const formLogin = document.getElementById("form-login");
formLogin.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (emailInput.value !== "" && passwordInput.value !== "") {
        const matchEmail = admin.email === emailInput.value;
        if (matchEmail) {
            const matchPassword = admin.password === passwordInput.value;
            if (matchPassword) {
                admin.isLoggedIn = true;
                await putAdmin(admin);
                window.location.href = "../home/index.html";
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
