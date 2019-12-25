import { combineReducers } from "redux";
import { registredReducer } from './registred';
import { issue } from "./issue";
import { filter } from "./filter";

export const rootReducer = combineReducers({
    registred:registredReducer,
    issue:issue,
    filter:filter
});

