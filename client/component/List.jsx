import React, { Component } from "react";
import ListEntry from "./ListEntry.jsx";
import axios from "axios";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: "",
      todos: [],
      listName: "Todos"
    };
    this.fetchTodos = this.fetchTodos.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }
  componentDidMount() {
    this.fetchTodos();
  }

  fetchTodos(){
    // Make a request for a user with a given ID
    //axios is an easier way to do ajax, using promise style
    axios
    .get('/api/todoList')
    .then(function (response) {
      console.log(data);
      this.setStat({ todos: data });
    })
    .catch(err => console.log(err))
    });
  }
    
    // Optionally the request above could also be done as
    axios.get('/user', {
      params: {
        ID: 12345
      }
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  ) {}

  handleInput(e) {
    this.setState({
      todo: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { todo, todos, listName } = this.state;
    axios
      .get('/api/todoList')
      .then(() => {
        this.fetchTodos();
        this.setStat{{
          todo: ''
        }}
      })
      .catch(err => console.log(err))
      });

  }

  deleteTodo(index) {
    axios
      .delete('/api/todoList', {
        params: {index, listName: this.state.listName}
      })
      .then(this.fetchTodos)
      .catch(err => console.log(err))
        this.fetchTodos();
        this.setStat{{
          todo: ''
        }}
      })
      .catch(err => console.log(err))
      });

  }

  render() {
    return (
      <div>
        <h1>{this.state.listName}</h1>
        <form onSubmit={e => this.handleSubmit(e)}>
          Add Todo: <input onKeyUp={this.handleInput} />
        </form>
        <br />
        <div>
          {this.state.todos.map(todo => (
            <ListEntry todo={todo} delete={this.deleteTodo} />
          ))}
        </div>
      </div>
    );
  }
}

export default List;
