import { useState } from 'react';

const TodoNew = (props) => {
    const { addTodoNew } = props;
    const [valueInput, setValueInput] = useState('');
    const handleOnChange = (name) => {
        setValueInput(name);
    }

    const handleClick = () => { 
        addTodoNew(valueInput)
        setValueInput('');
    }

    return (
        <div className="todo-new">
            <input type="text" value={valueInput} onChange={(e) => handleOnChange(e.target.value)} />
            <button onClick={handleClick}>Add</button>
        </div>
    );
};

export default TodoNew;