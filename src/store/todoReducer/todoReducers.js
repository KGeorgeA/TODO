import {
    ADD_TODO,
    DELETE_TODO,
    TOGGLE_COMPLETED,
    TOGGLE_ALL_COMPLETED,
} from "../../constants/ActionTypes"

let { allCompleted, items }  = localStorage.getItem("todos-json") 
        ? JSON.parse(localStorage.getItem("todos-json"))[0]
        : [{allCompleted: false, items: []}][0];

const initial = {
    allCompleted,
    items
}

const todoReducers = (state = initial, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                allCompleted: false,
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
                items: state.items.map(item => item.isCompleted === state.allCompleted ? {...item, isCompleted: !item.isCompleted} : item),
            }
        default:
            return state;
    }
};

export default todoReducers;