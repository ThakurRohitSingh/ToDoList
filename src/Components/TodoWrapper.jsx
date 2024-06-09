import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Todoform } from './Todoform';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Todo } from './Todo';
import { EditTodoform } from './EditTodoForm';
uuidv4();

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }]);
  };

  const toggleComplete = id => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = id =>{
    setTodos(todos.filter(todo=>todo.id !==id))
  }

  const editTodo = id => {
    setTodos(todos.map(todo => todo.id === id ? {...
      todo, isEditing: !todo.isEditing}: todo))
  }

  const editTask = (task,id) =>{
    setTodos(todos.map(todo => todo.id === id ? {...
      todo,task, isEditing: !todo.isEditing}: todo))
  }
  return (
    <div className="w-2/5 h-3/4 bg-white rounded-xl p-4">
      <div className="p-3 flex items-center gap-3">
        <FontAwesomeIcon
          icon={faPenToSquare}
          className="w-12 text-white text-2xl rounded-md p-3 bg-blue-600"
        />
        <div className="text-xl flex gap-1">
          <div className="text-blue-600">To Do</div>
          <div>List</div>
        </div>
      </div>
      <Todoform addTodo={addTodo} />
      {todos.map(todo => (
        todo.isEditing ?(
          <EditTodoform editTodo={editTask} task={todo}/>
        ) : (
          <Todo task={todo} key={todo.id} 
          toggleComplete={toggleComplete} 
          deleteTodo = {deleteTodo}
          editTodo={editTodo}
          />
        )
       
      ))}
    </div>
  );
};
