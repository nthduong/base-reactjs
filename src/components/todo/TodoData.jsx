const TodoData = (props) => {
    const { todoList, deleteTodo } = props;

    return (
        <div className="todo-data">
         {  todoList.map((item) => {
            return(
                    <div key={item.id}>
                        {item.name}
                        <button onClick={() => deleteTodo(item.id)}>delete</button>
                    </div>
            );
         })}
        </div> 
    );
};

export default TodoData;
