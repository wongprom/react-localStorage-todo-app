import React, { useContext, useState } from 'react';
import { DataContext } from './Contect';

const NewTodo = () => {
  const [dataContext, setdataContext] = useContext(DataContext);
  const [inputName, setinputName] = useState('');
  const [inputnumber, setinputnumber] = useState('');

  const handlerAddTodo = (event) => {
    event.preventDefault();
    let updateLocalStorageWithThis = [
      ...dataContext,
      {
        name: inputName,
        age: inputnumber,
      },
    ];
    localStorage.setItem('todos', JSON.stringify(updateLocalStorageWithThis));
    setdataContext(updateLocalStorageWithThis);
    setinputnumber('');
    setinputName('');
  };
  const handlerInputName = (event) => {
    setinputName(event.target.value);
  };
  const handlerInputNumber = (event) => {
    setinputnumber(parseInt(event.target.value));
  };
  return (
    <div>
      <h2>Add new todo</h2>
      <form onSubmit={handlerAddTodo}>
        <input
          name="name"
          type="text"
          placeholder="name"
          value={inputName}
          onChange={(event) => handlerInputName(event)}
        />
        <input
          name="number"
          type="number"
          placeholder="age"
          value={inputnumber}
          onChange={(event) => handlerInputNumber(event)}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default NewTodo;
