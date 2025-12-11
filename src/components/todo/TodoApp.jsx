import { useState } from "react";
import "./todo.css";
import reactLogo from "../../assets/react.svg";
import TodoNew from "./TodoNew.jsx";
import TodoData from "./TodoData.jsx";


const TodoApp = () => {
    const [todoList, setTodoList] = useState([]);
    const addTodoNew = (name) => {
        const newTodo = {
            id: todoList.length + 1,
            name: name,
        };
        setTodoList([...todoList, newTodo]);
    };

    const deleteTodo = (id) => {
        const newTodo = todoList.filter((item) => item.id !== id);
        setTodoList(newTodo);
    };
    return (
        <>
            <div className="todo-container">
                <div className="todo-title">todo</div>
                <TodoNew addTodoNew={addTodoNew} />

                {todoList.length > 0 ? (
                    <TodoData todoList={todoList} deleteTodo={deleteTodo} />
                ) : (
                    <div>
                        <img src={reactLogo} alt="" />
                    </div>
                )}
            </div>
        </>
    );
};

export default TodoApp;
