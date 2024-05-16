import React, { useState } from 'react';
import ToDoItem from './ToDoItem';
import AddToDo from './AddTodo';

interface ToDo {
    id: number;
    task: string;
    completed: boolean;
}

const ToDoList: React.FC = () => {
    const [todos, setTodos] = useState<ToDo[]>([]);

    const handleComplete = (id: number) => {
        const newTodos = todos.map(todo =>
            todo.id === id ? { ...todo, completed: true } : todo
        );
        setTodos(newTodos);
    };

    const handleAddTask = (task: string) => {
        const newTask = { id: Date.now(), task: task, completed: false };
        setTodos([...todos, newTask]);
    };

    return (
        <div>
            <AddToDo onAddTask={handleAddTask} />
            {todos.map(todo => (
                <ToDoItem
                    key={todo.id}
                    id={todo.id}
                    task={todo.task}
                    completed={todo.completed}
                    onComplete={handleComplete}
                />
            ))}
        </div>
    );
};

export default ToDoList;
