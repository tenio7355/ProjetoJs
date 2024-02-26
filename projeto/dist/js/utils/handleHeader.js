import { deleteLocalStorage } from "./localStorageService.js";
export function handleHeader(professor) {
    const overlayPopover = document.getElementById("overlay-popover");
    const popoverTrigger = document.getElementById("popover-trigger");
    const btnLogout = document.getElementById("btn-logout");
    const profileHeader = document.getElementById("profile-header");
    profileHeader.innerText = professor.name[0];
    popoverTrigger.addEventListener("click", event => {
        overlayPopover.classList.remove("hidden");
        btnLogout.classList.remove("hidden");
        overlayPopover.addEventListener("click", event => {
            removeListener();
        });
        btnLogout.addEventListener("click", event => {
            console.log("🚀 ~ handleHeader ~ btnLogout:", btnLogout);
            deleteLocalStorage();
            removeListener();
            window.location.href = "/projeto/src/pages/login/index.html";
        });
    });
    function removeListener() {
        overlayPopover.classList.add("hidden");
        overlayPopover.removeEventListener("click", () => "");
        btnLogout.classList.add("hidden");
        btnLogout.removeEventListener("click", () => "");
    }
}
