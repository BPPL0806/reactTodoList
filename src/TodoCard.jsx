import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function TodoCard({text, deleteTodo}) {
  const deleteFromStorage = (event) => {
    event.stopPropagation();
    const todos = JSON.parse(localStorage.getItem('todos'));
    const newTodos = todos.filter(todo => todo !== text);
    localStorage.setItem('todos', JSON.stringify(newTodos));
    deleteTodo(text);
  }

  return (
    <Card className='w-56 text-lg m-3' onClick={() => deleteTodo(text)}>
      <Card.Body>
        <Card.Text>
          {text}
        </Card.Text>
        <hr className='mt-2'/>
        <Button className='mt-2 w-9 h-9' variant='danger' onClick={deleteFromStorage}>X</Button>
      </Card.Body>
    </Card>
  );
}

export default TodoCard;
