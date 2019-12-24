import { combineReducers } from "redux";
import { registredReducer } from './registred';
import { issue } from "./issue";

export const rootReducer = combineReducers({
    registred:registredReducer,
    issue:issue
});

