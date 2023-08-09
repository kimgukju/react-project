import TodoItem from "../comps/TodoItem";

const TodoList = (props) => {

  const { todoList, itemComplete, itemDelete, updateItemSelect } = props;

  const todoItemList = todoList.map((todo) => {
    return (
      <TodoItem
        item={todo}
        key={todo.id}
        itemComplete={itemComplete}
        itemDelete={itemDelete}
        updateItemSelect={updateItemSelect}
      />
    );
  });
  return (
    <>
      {todoItemList}
    </>
  );
};
export default TodoList;
