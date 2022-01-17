import {
    ADD_TODO,
    DELETE_TODO,
    DELETE_ALL_COMPLETED,
    TOGGLE_COMPLETED,
    TOGGLE_ALL_COMPLETED,
} from "../../constants/ActionTypes";
import {
    SHOW_ALL,
    SHOW_ACTIVE,
    SHOW_COMPLETED,
} from "../../constants/TodoFilters";

const TITLES = {
    [SHOW_ALL]: SHOW_ALL,
    [SHOW_ACTIVE]: SHOW_ACTIVE,
    [SHOW_COMPLETED]: SHOW_COMPLETED,
}
let { allCompleted, filter, items }  = localStorage.getItem("todos-json") 
        ? JSON.parse(localStorage.getItem("todos-json"))[0]
        : [{allCompleted: false, filter: TITLES[SHOW_ALL], items: []}][0];

const todoReducers = (state = {allCompleted, filter, items}, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                allCompleted: false,
                filter: TITLES[SHOW_ALL],
                items: [
                    ...state.items,
                    {
                        id: action.id,
                        value: action.value,
                        isCompleted: false,
                    }
                ]
            };
        case DELETE_TODO:
            return {
                allCompleted: 
                    state.items.length !== 1
                    ? state.allCompleted
                    : false,
                items: 
                    state.items.length !== 1 
                    ? state.items.filter(item => parseInt(item.id) !== parseInt(action.id))
                    : []
            }
        case DELETE_ALL_COMPLETED:
            return {
                allCompleted: false,
                filter: TITLES[SHOW_ALL],
                items: state.items.filter(item => !item.isCompleted),
            }
        case TOGGLE_COMPLETED:
            let newItems = state.items.map(item => 
                parseInt(item.id) === parseInt(action.id) ? {...item, isCompleted: !item.isCompleted} : item
            );
            return {
                allCompleted: !newItems.filter(item => !item.isCompleted).length,
                items: newItems,
            }
        case TOGGLE_ALL_COMPLETED:
            return {
                allCompleted: state.allCompleted ? false : true,
                filter: SHOW_COMPLETED,
                items: state.items.map(item => item.isCompleted === state.allCompleted ? {...item, isCompleted: !item.isCompleted} : item),
            }
        case SHOW_ALL:
            return {
                ...state,
                filter: TITLES[SHOW_ALL],
            };
        case SHOW_COMPLETED:
            return {
                ...state,
                filter: TITLES[SHOW_COMPLETED],
            };
        case SHOW_ACTIVE:
            return {
                ...state,
                filter: TITLES[SHOW_ACTIVE],
            };    
        default:
            return state;
    }
};

export default todoReducers;