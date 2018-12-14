export const deleteUser = (user) => {
    return {type : "delete_user", payload : user}
}

export const addUser = (user) => {
    return {type : "add_user", payload : user}
}

export const getUser = (user) => {
    return {type : "get_user", payload : user}
}

export const allUser = (user) => {
    return {type : "all_user", payload : user}
}

export const editUser = (user) => {
    return {type : "edit_user", payload : user}
}

// export {
//     deleteUser, 
//     addUser, 
//     getUser
// };