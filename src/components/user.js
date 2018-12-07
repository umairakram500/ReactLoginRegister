export default User = {
    getUsers: () => {
        return JSON.parse(localStorage.getItem("Users")) || []
    }
}