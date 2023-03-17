import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

import usersReducer from "./users-reducer";
import authReducer from "./ayth-reducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    auth: authReducer,
    usersPage: usersReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store