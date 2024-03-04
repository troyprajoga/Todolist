export function toggleTodo(id, completed, setTodos, todos) {
  setTodos((currentTodos) => {
    return currentTodos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed };
      }
      return todo;
    });
  });
}

export function deleteTodo(id, setTodos, todos) {
  setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
}

export function handleEdit(id, newTitle, setTodos, todos) {
  setTodos((currentTodos) =>
    currentTodos.map((todo) =>
      todo.id === id ? { ...todo, title: newTitle } : todo
    )
  );
}
