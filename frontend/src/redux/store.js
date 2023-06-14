import { legacy_createStore, compose, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import usersReducer from "./userReducer/reducer.user";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    usersReducer
})


const store = legacy_createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
)


export default store