import React, { Component } from 'react';
import { Layout, Header, Drawer, Content, Navigation} from 'react-mdl';
import Main from './Components/main';
import TodoList from './Components/pages/todolist';


import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

//components
/*import './Assets/default.css';
import Header from './Components/headerComponent/Header';
import Footer from './Components/footerComponent/Footer';
import Homepage from './Components/pages/homePage';
import Products from './Components/pages/products';
import Contact from './Components/pages/contact';
*/


class App extends Component {
  render() {
    return (
        <div className="demo-big-content">
                <Layout>
                    <Header title="Title" scroll>
                        <Navigation>
                            <Link to="/resume">Resume</Link>
                            <Link to="/about">About Me</Link>
                            <Link to="/projects">Projects</Link>
                            <Link to="/products">Products</Link>
                            <Link to="/contact">Contact</Link>
                        </Navigation>
                    </Header>
                    <Drawer title="Title">
                        <Navigation>
                            <Link to="/resume">Resume</Link>
                            <Link to="/about">About Me</Link>
                            <Link to="/projects">Projects</Link>
                            <Link to="/products">Products</Link>
                            <Link to="/contact">Contact</Link>
                        </Navigation>
                    </Drawer>
                    <Content>
                        <div className="page-content" />
                        <Main />

                    </Content>
                </Layout>
      </div>
    );
  }
}

export default App;