import { combineReducers } from "redux";
import todoReducers from "./todoReducer/todoReducers";
// import todoFilters from "./todoReducer/todoFilters";

export default combineReducers({
    todoReducers,
    // todoFilters,
})