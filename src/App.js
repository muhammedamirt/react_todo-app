import React, { useState } from 'react';
import './App.css';
function App() {
  let d = new Date();
  let utc = d.getTime() + (d.getTimezoneOffset() * 60000);
  let nd = new Date(utc + (3600000 * +5.5));
  let ist = nd.toLocaleString();

  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState("")

  return (
    <div className="container">
      <div className="app">

        <div className="mainHeading">
          <h1>ToDo List</h1>
        </div>
        <div className="subHeading">
          <br />
          <h2>Whoop, it's Monday 🌝 ☕ </h2>
        </div>
        <div className="input">
          <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} placeholder="🖊️ Add item..." />
          <i className="fas fa-plus" onClick={() => setTodos(todo.length !== 0 ? [...todos, { id: Date.now(), text: todo, status: false, time: ist }] : [...todos])}></i>
        </div>
        <div className="todos">
          <h2 className='taskhead'>Task list</h2>
          {
            todos.length !== 0 ? todos.map((todoVal) =>

              <div className="todo">
                <div className="left">
                  <input onChange={(e) => {
                    setTodos(todos.filter((obj) => {
                      if (todoVal.id === obj.id) {
                        todoVal.status = e.target.checked
                      }
                      return obj
                    }))
                  }} value={todoVal.status} type="checkbox" name="" className='checkBox' id={todoVal.id} />
                  <p>
                    <span className={todoVal.status ? "success" : "pending"}>{todoVal.text}</span>
                    <br />
                    <span className='dateTime'>{todoVal.time}</span>
                  </p>

                </div>
                <div className="right">
                  <i className="fas fa-times" onClick={() => setTodos(todos.filter(obj2 => {
                    let temp;
                    if (obj2.id !== todoVal.id) {
                      temp = obj2
                    }
                    return temp;
                  }))}></i>
                </div>
              </div>
            )
              : <div className="todo">
                <div className="left">
                  <p className='emptyValue'>No Tasks....</p>
                </div>
              </div>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
