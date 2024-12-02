import React from "react";

// 未完了のTodoリストを表示するコンポーネント
export const IncompleteTodo = (props) => {
    const { incompleteTodos, onClickComplete, onClickDelete } = props;
    return (
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
    );
};
