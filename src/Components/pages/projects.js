import React, { Component } from 'react';
import TodoList from './todolist';

class Projects extends Component {
  render() {
    return (
        <div className="container-fluid">
        
        <h2>
        Project list
        </h2>
        <p>
        <TodoList />
        </p>
        </div>

    );
  }
}

export default Projects;