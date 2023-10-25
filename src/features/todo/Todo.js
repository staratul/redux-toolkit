import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../../slices/todo";

const Todo = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log("State", state);

  if (state.todo.isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <button onClick={(e) => dispatch(fetchTodos())}>Fetch Todos</button>
      {state.todo.data &&
        state.todo.data.map((t) => {
          return <li key={t.id}>{t.title}</li>;
        })}
    </div>
  );
};

export default Todo;
