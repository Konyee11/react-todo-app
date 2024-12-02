import React from "react";

// 完了のTodoリストを表示するコンポーネント
export const CompleteTodo = (props) => {
    const { completeTodos, onClickUndo } = props;
    return (
        <div className="complete-area">
            <p>完了のTodo</p>
            <ul className="complete-area__ul">
                {completeTodos.map((todo, index) => (
                    <li className="complete-area__li" key={todo}>
                        <p className="todo-item">{todo}</p>
                        <button
                            className="btn btn__undo"
                            onClick={() => onClickUndo(index)}
                        >
                            戻す
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};
