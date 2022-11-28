import * as actionTypes from "../../actions/todo/todoActionTypes";

const initialState = {
    todos: [],
    filterTodos: [],
    error: null,
    success: null
}
export default function todoReducer(state = initialState, action) {
    var newTodos;
    switch (action.type) {
        case actionTypes.TODO_ADD:
            newTodos = [...state.todos, action.payload];
            return { todos: newTodos };
        case actionTypes.TODO_REMOVE:
            newTodos = state.todos.filter((item) => {
                return item.Id !== action.payload.Id
            });
            return { todos: newTodos };

        case actionTypes.TODO_FILTER:
            newTodos = state.todos.map((todo, i) => {
                if (todo.Id == action.payload.Id) {
                    return { ...todo, isChecked: action.payload.isChecked }
                }
                return todo
            })
            return { todos: newTodos, filterTodos: newTodos };

        case actionTypes.GET_TODOS_API:
            //action'dan gelen todoları(yani api'den gelen) todos state'ine set edip dönderiyoruz.
            return { todos: action.payload, filterTodos: action.payload };

        default:
            return state;
    }
}