const initialState = JSON.parse(localStorage.getItem("Users")) || [];
let users;
const userListReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'add_user':
        //debugger
            users = [ ...state, action.payload];
            updateStorage();
            return  users;

        case 'get_user': 
        return state.find(user =>
            user.id === Number(action.payload)
        );

        case 'all_user': 
            debugger
            return state;
        
        case 'edit_user': 
            var index = state.findIndex((user => user.id === Number(action.payload)));
            state[index] = action.payload;
            users = state;
            updateStorage();
            return users;

        case 'delete_user':
        //debugger
            users = state.filter(s =>
                s.id != action.payload
            );
            updateStorage();
            return  users;

        default:
        //debugger
           return state;
    }

}

function updateStorage(){
    localStorage.setItem("Users", JSON.stringify(users));
}

export default userListReducer;