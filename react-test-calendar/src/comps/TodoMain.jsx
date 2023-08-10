import TodoInput from "./TodoInput";
import { useState, useEffect } from "react";
import "../css/Todo.css";

import { initData } from "../data/initData";

import uuid from "react-uuid";
import TodoList from "./TodoList";

const TodoMain = () => {
  const [todo, setTodo] = useState(() => initData());
  const [todoList, setTodoList] = useState(() => {
    return localStorage.getItem("TODOLIST")
      ? JSON.parse(localStorage.getItem("TODOLIST"))
      : [];
  });

  useEffect(() => {
    const resetTodo = () => {
      setTodo(initData());
      console.log("Use Effect");
      localStorage.setItem("TODOLIST", JSON.stringify(todoList));
    };
    resetTodo();
  }, [todoList]);

  const todoListAdd = (content) => {
    const newTodo = { ...todo, id: uuid(), content: content };
    setTodoList([...todoList, newTodo]);
  };

  const itemComplete = (id) => {
    const compTodoList = todoList.map((item) => {
      if (item.id === id) {
        return { ...item, complete: !item.complete };
      }
      return item;
    });
    setTodoList([...compTodoList]);
  };

  const itemDelete = (id) => {
    if (window.confirm("삭제할까요??")) {
      const deleteTodoList = todoList.filter((item) => {
        return item.id !== id;
      });
      setTodoList([...deleteTodoList]);
    }
  };

  const updateItemSelect = (id) => {
    const selectTodoList = todoList.filter((item) => {
      return item.id === id;
    });
    setTodo({ ...selectTodoList[0] });
  };

  const todoInput = (content) => {
    if (!todo.id) {
      todoListAdd(content);
    } else {
      const updateTodoList = todoList.map((item) => {
        if (item.id === todo.id) {
          return { ...item, content: content };
        }
        return item;
      });
      setTodoList(updateTodoList);
    }
  };

  return (
    <div className="todo">
      <TodoInput todo={todo} setTodo={setTodo} todoInput={todoInput} />
      <TodoList
        itemDelete={itemDelete}
        todoList={todoList}
        itemComplete={itemComplete}
        updateItemSelect={updateItemSelect}
      />
    </div>
  );
};

export default TodoMain;
