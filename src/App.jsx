import { useState, useEffect } from 'react';
import TodoCard from './TodoCard';
import Button from 'react-bootstrap/Button';

export default function App() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || []);

  const addTodo = (e) => {
    e.preventDefault();
    const inputVal = e.target[0].value;
    if (!inputVal) return;
    setTodos([...todos, inputVal]);
    e.target[0].value = '';
  }

  const deleteTodo = (todoToDelete) => {
    const newTodos = todos.filter(todo => todo !== todoToDelete);
    setTodos(newTodos);
  }

  // save to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <div className='flex justify-center flex-row'>
        <form onSubmit={addTodo}>
          <input className='mr-2 border-black border-solid border-2 rounded-md'></input>
          <Button type='submit' variant='success'>+</Button>
        </form>
      </div>
      <hr className='mb-4 mt-4'/>
      <div className='flex flex-row flex-wrap justify-center'>
        {todos.map((todo, index) => <TodoCard key={index} text={todo} deleteTodo={deleteTodo}/>)}
      </div>
    </>
  )
}
