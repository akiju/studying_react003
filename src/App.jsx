import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./Components/InputTodo";
import { InComplete } from "./Components/InComplete";
import { Complete } from "./Components/Complete";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState(["あああ", "いいい"]);
  const [completeTodos, setCompleteTodos] = useState(["かかか"]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);
  //追加ボタン
  const onClickAdd = () => {
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };
  // 完了ボタン
  const onClickComplete = (index) => {
    const newinCompTodos = [...incompleteTodos];
    const CompTodo = incompleteTodos[index];
    const newCompTodos = [...completeTodos, CompTodo];

    newinCompTodos.splice(index, 1);
    setIncompleteTodos(newinCompTodos);
    setCompleteTodos(newCompTodos);
  };
  //削除ボタン
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];

    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };
  //戻すボタン
  const onClickBack = (index) => {
    const newCompTodos = [...completeTodos];
    const compTodo = completeTodos[index];
    const newinCompTodos = [...incompleteTodos, compTodo];

    newCompTodos.splice(index, 1);
    setIncompleteTodos(newinCompTodos);
    setCompleteTodos(newCompTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={incompleteTodos.length >= 5}
      />
      {incompleteTodos.length >= 5 && <p>いっぱいだよ</p>}

      <InComplete
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <Complete todos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};
