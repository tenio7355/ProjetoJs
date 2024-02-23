export function getLocalStorageProfessor() {
    const localStorageInfo = localStorage.getItem("user");
    if (localStorageInfo) {
        const result = JSON.parse(localStorageInfo);
        return result;
    }
}
export function setLocalStorageProfessor(userId) {
    if (userId !== "") {
        localStorage.setItem("user", JSON.stringify(userId));
    }
}
