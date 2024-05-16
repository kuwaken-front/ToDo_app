import React from 'react';

interface ToDoItemProps {
    task: string;
    id: number;
    completed: boolean;
    onComplete: (id: number) => void;
}

const ToDoItem: React.FC<ToDoItemProps> = ({ task, id, completed, onComplete }) => {
    return (
        <div style={{ textDecoration: completed ? 'line-through' : 'none' }}>
            {task}
            <button onClick={() => onComplete(id)} disabled={completed}>
                {completed ? "Completed" : "Complete"}
            </button>
        </div>
    );
};

export default ToDoItem;
