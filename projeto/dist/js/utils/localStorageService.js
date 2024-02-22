export function getLocalStorageUser() {
    const localStorageInfo = localStorage.getItem("user");
    if (localStorageInfo) {
        const result = JSON.parse(localStorageInfo);
        return result;
    }
}
export function setLocalStorageUser(userId) {
    if (userId !== "") {
        localStorage.setItem("user", JSON.stringify(userId));
    }
}
