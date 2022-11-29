import * as actionTypes from "../../actions/todo/todoActionTypes";

const initialState = {
    todos: [],
    message: null,
}
export default function todoReducer(state = initialState, action) {
    var newTodos;
    switch (action.type) {
        case actionTypes.ADD_TODO:
            newTodos = [...state.todos, action.payload.data];
            return { todos: newTodos, message: action.payload.statusText };
        case actionTypes.REMOVE_TODO:
            newTodos = state.todos.filter((item) => {
                return item.id !== action.payload.id
            });
            return { todos: newTodos, message: action.payload.data.statusText };

        case actionTypes.FILTER_TODO:
            newTodos = state.todos.map((todo, i) => {
                if (todo.id == action.payload.data.id) {
                    return { ...todo, isChecked: action.payload.data.isChecked }
                }
                return todo
            })
            return { todos: newTodos, message: action.payload.statusText };

        case actionTypes.GET_TODOS_API:
            return { todos: action.payload };
        default:
            return state;
    }
}
