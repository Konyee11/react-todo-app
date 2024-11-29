import React from "react";
import "../styles/styles.css";

export const Todo = () => {
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
                    <li className="incomplete-area__li">
                        <p className="todo-item">洗濯</p>
                        <button className="btn btn__complete">完了</button>
                        <button className="btn btn__delete">削除</button>
                    </li>
                    <li className="incomplete-area__li">
                        <p className="todo-item">洗濯</p>
                        <button className="btn btn__complete">完了</button>
                        <button className="btn btn__delete">削除</button>
                    </li>
                </ul>
            </div>
            <div className="complete-area">
                <p>完了のTodo</p>
                <ul className="complete-area__ul">
                    <li className="complete-area__li">
                        <p className="todo-item">買い物</p>
                        <button className="btn btn__undo">戻す</button>
                    </li>
                    <li className="complete-area__li">
                        <p className="todo-item">買い物</p>
                        <button className="btn btn__undo">戻す</button>
                    </li>
                </ul>
            </div>
        </div>
    );
};
