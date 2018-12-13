import { createStore, combineReducers } from 'redux';

import userListReducer from './reducers/userlist_reducer'

const allReducers = combineReducers({
    userListReducer
})

let store = createStore(allReducers);

export default store