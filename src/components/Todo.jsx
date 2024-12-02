import React, { useState } from "react";
import "../styles/styles.css";

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

    return (
        <div id="container">
            <div className="input-area">
                <input
                    id="add-text"
                    type="text"
                    placeholder="Todoを入力"
                    value={todoText}
                    onChange={onChangeTodoText}
                />
                <button
                    id="add-button"
                    className="btn btn__add"
                    onClick={onClickAdd}
                >
                    追加
                </button>
            </div>
            <div className="incomplete-area">
                <p className="title">未完了のTodo</p>
                <ul className="incomplete-area__ul">
                    {incompleteTodos.map((todo, index) => (
                        <li className="incomplete-area__li" key={todo}>
                            <p className="todo-item">{todo}</p>
                            <button
                                className="btn btn__complete"
                                onClick={() => onClickComplete(index)}
                            >
                                完了
                            </button>
                            <button
                                className="btn btn__delete"
                                onClick={() => onClickDelete(index)}
                            >
                                削除
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="complete-area">
                <p>完了のTodo</p>
                <ul className="complete-area__ul">
                    {completeTodos.map((todo) => (
                        <li className="complete-area__li" key={todo}>
                            <p className="todo-item">{todo}</p>
                            <button className="btn btn__undo">戻す</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
