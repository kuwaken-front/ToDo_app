import React, { useState } from 'react';

interface AddToDoProps {
    onAddTask: (task: string) => void;
}

const AddToDo: React.FC<AddToDoProps> = ({ onAddTask }) => {
    const [input, setInput] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (input.trim() !== '') {
            onAddTask(input);
            setInput('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Add a new task"
            />
            <button type="submit">Add Task</button>
        </form>
    );
};

export default AddToDo;
