import React, { useEffect, useState } from 'react';
import './App.css';
import NewTodo from './NewTodo';
import { DataContext } from './Contect';

function App() {
  const [dataContext, setDataContext] = useState(null);
  useEffect(() => {
    let todosLocalStorage = localStorage.getItem('todos');

    if (!todosLocalStorage) {
      setDataContext([]);
    } else {
      setDataContext(JSON.parse(todosLocalStorage));
    }
  }, [setDataContext]);

  const removeTodo = (todoToRemove) => {
    const updated = dataContext.filter(
      (item) => item.name !== todoToRemove.name
    );

    localStorage.setItem('todos', JSON.stringify(updated));
    setDataContext(updated);
  };

  const displayTodos =
    dataContext?.length > 0 &&
    dataContext.map((todo, index) => {
      return (
        <div key={index}>
          <h2 style={{ display: 'inline-block' }}>{todo.name}</h2>
          <span
            onClick={() => removeTodo(todo)}
            style={{ paddingLeft: '2rem' }}
          >
            X
          </span>
        </div>
      );
    });

  return (
    <div className="App">
      <DataContext.Provider value={[dataContext, setDataContext]}>
        <h1> welcome to Todo</h1>

        <NewTodo />
        {displayTodos ? displayTodos : <h2>I am free 😁</h2>}
      </DataContext.Provider>
    </div>
  );
}

export default App;
