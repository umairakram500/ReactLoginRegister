const initialState = JSON.parse(localStorage.getItem("Users")) || [];
let users;
const userListReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'add_user':
            users = [ ...state, action.payload];
            updateStorage();
            return  users;

        case 'fetch_user':            

        case 'delete_user':
            users = state.filter(user =>
                user.id !== action.payload
            );
            updateStorage();
            return  users;

        default:
           return state;
    }

}

function updateStorage(){
    localStorage.setItem("Users", JSON.stringify(users));
}

export default userListReducer;