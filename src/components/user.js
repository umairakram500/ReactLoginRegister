export default {
    getUsers: () => {
        return JSON.parse(localStorage.getItem("Users")) || []
    }
}