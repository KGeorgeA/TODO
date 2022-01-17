import {
    SHOW_ALL,
    SHOW_COMPLETED,
    SHOW_ACTIVE
} from "../../constants/TodoFilters";

const todoFilters = (state = SHOW_ALL, action) => {
    switch (action.type) {
        case SHOW_ALL:
            console.log("SHOW_ALL");
            break;
        case SHOW_COMPLETED:
            console.log("SHOW_COMPLETED");
            break;
        case SHOW_ACTIVE:
            console.log("SHOW_ACTIVE");
            break;
    
        default:
            return state;
    }
}

export default todoFilters;