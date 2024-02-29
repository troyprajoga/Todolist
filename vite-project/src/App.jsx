import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  //declare state
  const [todos, setTodos] = useState([])
  //set another state for new item
  const [newItem, setNewItem] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
// for todo lists
    setTodos((currentTodos) => {
      return[
        ...currentTodos,
        { id: crypto.randomUUID(), title: newItem, completed:false}
      ]
      
    })
  }
  function toggleTodo(id,completed){
    setTodos((currentTodos)=>{
      return currentTodos.map((todo) => {
        if (todo.id === id){
          return{...todo,completed}
        }
        return todo
      })
    })
  }
  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) =>
      todo.id !== id)
    })
  }
  function handleEdit(id, newTitle) {
    setTodos((currentTodos) =>
      currentTodos.map((todo) => (todo.id === id ? { ...todo, title: newTitle } : todo))
    );
  }
  
  return (
    <>
    <div class="container" className="bg-violet-900">
    <div>
      <form className='new-item-form'>
        <div className="form-row">
          <label htmlFor='item' className='font-bold'>New item</label>
          <input type="text" id="item" value={newItem} onChange={(e) => setNewItem(e.target.value)}>
            {/*make event listener*/} 
          </input>
        </div>

        <button className="btn" onClick={handleSubmit}>Add</button>
        {/*call function on click*/}
      </form>
      </div>
      <h1 className='header'>Todo List</h1>
      <ul className="list">
        {/*to display*/}
        {todos.map((todo,id)=>{
          return(
            <li key={id}>
              <label>
              <input type="checkbox" checked={todo.complete} onChange={(e) => toggleTodo(todo.id,e.target.checked)}/>
              {todo.title}
              <button className='btn btn-danger' onClick={() => deleteTodo(todo.id)}> Delete</button>
              <button className="btn btn-edit" onClick={() =>{
                const newTitle = prompt('Enter new title:', todo.title);
                if (newTitle !== null && newTitle !== '') {
                  handleEdit(todo.id, newTitle);
                }}}>Edit</button>
              </label>
            </li>
          )
        })}
      </ul>
      </div>
    </>
  )
}

export default App
