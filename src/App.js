import React from "react";
import logo from "./logo.svg";
import "./App.css";

let id = 0;

const Todo = params => (
  <li class="todo-item">
    <input
      type="checkbox"
      checked={params.todo.checked}
      onChange={params.onToggle}
    />
    <span style={{ textDecoration: params.todo.checked ? 'line-through' : 'none' }}>{params.todo.text}</span>
    <button class="btn" onClick={params.onDelete}>Delete</button>
  </li>
);


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: []
    };
  }

  addTodo() {
    const text = prompt("Enter your TODO: ");
    this.setState({
      todos: [...this.state.todos, { id: id++, text: text, checked: false }]
    });
  }

  deleteTodo(id) {
    this.setState({ todos: this.state.todos.filter(todo => todo.id !== id) });
  }

  toggleTodo(id) {
    this.setState({
      todos: this.state.todos.map(todo => {
        if ((todo.id = !id)) return todo;

        return {
          id: todo.id,
          text: todo.text,
          checked: !todo.checked
        };
      })
    });
  }

  render() {
    return (
      <div id="todo">
        <button class="btn" onClick={() => this.addTodo()}>Add Todo</button>
        <div class="counters">
          <h3>Total Todo's: {this.state.todos.length}</h3>
          <h3>
            Unchecked Todo's:
            {this.state.todos.filter(todo => !todo.checked).length}
          </h3>
        </div>
        <ul id="todo-list">
          {this.state.todos.map(todo => (
            <Todo
              onToggle={() => this.toggleTodo(todo.id)}
              onDelete={() => this.deleteTodo(todo.id)}
              todo={todo}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
