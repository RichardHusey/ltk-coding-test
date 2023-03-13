export const addTodo = ({ todo, priority, complete }) => ({
  type: "ADDING_TODO",
  todo,
  priority,
  complete,
});

export const deleteTodo = (id) => ({
  type: "DELETING_TODO",
  id,
});
