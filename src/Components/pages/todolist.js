import React, { Component } from 'react';

var todos = []


class TodoList extends Component {
    constructor(props){
        super(props);

        this.state = {
            todos
        };

        this.handleAddTodo = this.handleAddTodo.bind(this);
     }
 


     handleRemoveTodo(index) {
         this.setState({
             todos: this.state.todos.filter(function(e, i){
                return i !== index;
             })
         })

     }

    handleAddTodo(todo) {
        this.setState({
            todos: [...this.state.todos,todo]
        })
    }

    render() {
        return (
            /*<div className="todoListMain">
                <div className="header">
                <form onSubmit={this.addItem}>
                    <input placeholder="enter task">
                    </input>
                    <button type="submit">add</button>
                </form>
                </div>
            </div>*/
            <div className="container">
            <TodoInput onAddTodo={this.handleAddTodo}></TodoInput>
            <hr/>
            <ul className="list-group">
                {this.state.todos.map((todo, index) => 
                    <li className="list-group-item" key={index}>
                        <h4 className="list-group-item-heading">{todo.todoTitle} <small><span className="label label-default">{todo.todoPriority}</span></small></h4>

                        <p><span className="glyphicon glyphicon-user"></span>{todo.todoResponsible}</p>
                        <p>{todo.todoDescription}</p>
                        <button className="btn btn-danger btn-sm" onClick={this.handleRemoveTodo.bind(this, index)}><span className="glyphicon glyphicon-trash"></span> Delete</button>
                    </li>
                )}
            </ul>
            </div>
        );
    }
}

class TodoInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todoTitle: '',
            todoResponsible: '',
            todoDescription: '',
            todoPriority: 'Lowest',
            count: 0
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })

    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onAddTodo(this.state);
        this.setState({
            todoTitle: '',
            todoResponsible: '',
            todoDescription: '',
            todoPriority: 'Lowest'
        })
    }

    increment = () => {
        this.setState({count: this.state.count+1})

    };


     render() {
       return (
            <div>
                <h5>Add new todo</h5>
                <form className="form-horizontal" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="inputTodoTitle" className="col-sm-2 control-label">ToDo</label>
                            <div className="col-sm-10">
                                <input  name="todoTitle"
                                        type="text"
                                        className="form-control"
                                        id="inputTodoTitle"
                                        value={this.state.todoTitle}
                                        onChange={this.handleInputChange}
                                        placeholder="Title">
                                </input>
                            </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputTodoResponsible" className="col-sm-2 control-label">Responsible</label>
                            <div className="col-sm-10">
                                <input  name="todoResponsible"
                                        type="text"
                                        className="form-control"
                                        id="inputTodoResponsible"
                                        value={this.state.todoResponsible}
                                        onChange={this.handleInputChange}
                                        placeholder="Responsible">
                                </input>
                            </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputTodoDesc" className="col-sm-2 control-label">Description</label>
                            <div className="col-sm-10">
                                <textarea  name="todoDescription"
                                        type="text"
                                        className="form-control"
                                        rows ="4"
                                        id="inputTodoDesc"
                                        value={this.state.todoDescription}
                                        onChange={this.handleInputChange}
                                        placeholder="Description">
                                </textarea>
                            </div>
                    </div>
                    <div className="form-group">
                        <label  htmlFor="inputTodoPriority" className="col-sm-2  control-label">Priority</label>
                            <div className="col-sm-10">
                                <select  name="todoPriority"
                                        type="text"
                                        className="form-control"
                                        rows ="4"
                                        id="inputTodoPriority"
                                        value={this.state.todoPriority}
                                        onChange={this.handleInputChange}>
                                        <option>Lowest</option>
                                        <option>Low</option>
                                        <option>Medium</option>
                                        <option>High</option>
                                        <option>Highest</option>
                                        
                                </select>
                            </div>
                    </div>
                    <div>
                        <h5>Todo count: <span className="badge">{this.state.count}</span></h5>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="submit" className="btn btn-success" onClick={this.increment}>
                                Add Todo
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }


}

export default TodoList;