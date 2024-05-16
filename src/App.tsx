import React from 'react';
import ToDoList from './components/ToDoList';

const App: React.FC = () => {
    return (
        <div>
            <h1>ToDo List</h1>
            <ToDoList />
        </div>
    );
};

export default App;