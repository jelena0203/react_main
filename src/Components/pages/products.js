import React, { Component } from 'react';
import SingleTodo from './SingleTodo';


class Products extends Component {
  constructor (){
    super();

    this.state = {
      todos: [],
      currentTodo: ""
    }
  }

  onInputChange = (e) => {
    // e is an event. This event essentially tells what the input was changed to
    //e.target.value is the value property of some DOM element, in this case that means the text entered in the input.
    this.setState({currentTodo: e.target.value})
  }

  onClick = () => {
    {/*this will create an exact copy of the original todos list*/}
    let todosCopy = this.state.todos.slice();
    {/*This is adding a new todo to the end of the todos list*/}
    todosCopy.push(this.state.currentTodo);


    {/*setting the state*/}
    this.setState({
      todos: todosCopy,
      currentTodo: ""
    });
  }

  deleteTodo = i => {
    //copy the state of the todos
    let todosCopy = this.state.todos.slice();
    //splice(i,1) at position i, remove 1 item...i is the current indes of this
    todosCopy.splice(i,1);
    this.setState({ todos: todosCopy });
  }

  render() {
    {/*map is going to take an element 'e' and an index 'i'. We are going to, for each element, return some kind of JavaScript or HTML element.
    We're going to return a list and we will let the value be 'e'.Key is index in this list */}
    let bulletedTodos = this.state.todos.map ((e, i) => {
      return(
      <SingleTodo todo={e} delete={() => this.deleteTodo(i)}/>
      );
    });

    return (
        <div className="container-fluid">
          {/*value={this.state.currentTodo} the value of this input is being bound to a state and that state is unhchenging. We need to add a method onInputChange
          such when this is changed we are actually changing the value of the state. onChange is going to trigger a function and pass in something called an event.
          */}
          <input placeholder = "Enter todo" value={this.state.currentTodo} onChange={this.onInputChange}/>
          <button onClick={this.onClick}>Add!</button>
          <br/>
          { this.state.todos.length === 0 ? "No todos yet" : <ul>{bulletedTodos}</ul> }
        </div>

    );
  }
}

export default Products;