import React, { Component } from 'react';
import TodoList from './todolist';

class Projects extends Component {
  render() {
    return (
        <div className="container-fluid">
        
        <h1>
        Projects page
        </h1>
        <p>
        Projects
        <TodoList />
        </p>
        </div>

    );
  }
}

export default Projects;