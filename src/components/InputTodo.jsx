import React from "react";

// 入力欄と追加ボタンを表示するコンポーネント
export const InputTodo = (props) => {
    const { todoText, onChange, onClick, disabled } = props;
    return (
        <div className="input-area">
            <input
                id="add-text"
                type="text"
                placeholder="Todoを入力"
                value={todoText}
                onChange={onChange}
                disabled={disabled}
            />
            <button
                id="add-button"
                className="btn btn__add"
                onClick={onClick}
                disabled={disabled}
            >
                追加
            </button>
        </div>
    );
};
