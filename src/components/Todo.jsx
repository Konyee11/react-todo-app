import React, { useState } from "react";
import "../styles/styles.css";

export const Todo = () => {
    const [incompleteTodos, setIncompleteTodos] = useState(["洗濯", "買い物"]);
    const [completeTodos, setCompleteTodos] = useState(["掃除", "料理"]);

    return (
        <div id="container">
            <div className="input-area">
                <input id="add-text" type="text" placeholder="Todoを入力" />
                <button id="add-button" className="btn btn__add">
                    追加
                </button>
            </div>
            <div className="incomplete-area">
                <p className="title">未完了のTodo</p>
                <ul className="incomplete-area__ul">
                    {incompleteTodos.map((todo) => (
                        <li className="incomplete-area__li" key={todo}>
                            <p className="todo-item">{todo}</p>
                            <button className="btn btn__complete">完了</button>
                            <button className="btn btn__delete">削除</button>
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
