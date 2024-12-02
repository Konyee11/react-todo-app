import React, { useState } from "react";
import "./styles/styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodo } from "./components/IncompleteTodo";
import { CompleteTodo } from "./components/CompleteTodo";

export const Todo = () => {
    const [todoText, setTodoText] = useState("");
    const [incompleteTodos, setIncompleteTodos] = useState(["洗濯", "買い物"]);
    const [completeTodos, setCompleteTodos] = useState(["掃除", "料理"]);

    // テキストボックスに入力した文字列をセット
    const onChangeTodoText = (event) => setTodoText(event.target.value);

    // 追加ボタンを押した時の処理
    const onClickAdd = () => {
        if (todoText === "") return;
        const newTodos = [...incompleteTodos, todoText];
        setIncompleteTodos(newTodos);
        setTodoText("");
    };

    // 削除ボタンを押した時の処理
    const onClickDelete = (index) => {
        const newTodos = [...incompleteTodos];
        newTodos.splice(index, 1); // index番目から1つ削除
        setIncompleteTodos(newTodos); // 削除した配列をセット
    };

    // 完了ボタンを押した時の処理
    const onClickComplete = (index) => {
        const newIncompleteTodos = [...incompleteTodos]; // 未完了のTodoリストをコピー
        newIncompleteTodos.splice(index, 1); // 未完了のTodoリストから削除

        const newCompleteTodos = [...completeTodos, incompleteTodos[index]]; // 完了のTodoリストに追加

        // 未完了のTodoリストと完了のTodoリストを更新
        setIncompleteTodos(newIncompleteTodos);
        setCompleteTodos(newCompleteTodos);
    };

    const onClickUndo = (index) => {
        const newCompleteTodos = [...completeTodos]; // 完了のTodoリストをコピー
        newCompleteTodos.splice(index, 1); // 完了のTodoリストから削除

        const newIncompleteTodos = [...incompleteTodos, completeTodos[index]]; // 未完了のTodoリストに追加

        // 未完了のTodoリストと完了のTodoリストを更新
        setCompleteTodos(newCompleteTodos);
        setIncompleteTodos(newIncompleteTodos);
    };

    return (
        <div id="container">
            {/* InputTodoコンポーネント */}
            <InputTodo
                todoText={todoText}
                onChange={onChangeTodoText}
                onClick={onClickAdd}
            />
            {/* IncompleteTodoコンポーネント */}
            <IncompleteTodo
                incompleteTodos={incompleteTodos}
                onClickComplete={onClickComplete}
                onClickDelete={onClickDelete}
            />
            {/* CompleteTodoコンポーネント */}
            <CompleteTodo
                completeTodos={completeTodos}
                onClickUndo={onClickUndo}
            />
        </div>
    );
};
