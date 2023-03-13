import { initialState } from "../store";
let todoId = 8;

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADDING_TODO":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: todoId++,
            name: action.todo,
            priority: action.priority,
            complete: action.complete,
          },
        ],
      };
      case "DELETING_TODO":
        return {
          ...state,
          todos: state.todos.filter(todo => todo.id !== action.id)
        };
    default:
      return state;
  }
};
