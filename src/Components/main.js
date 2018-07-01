import React from 'react';
import { Switch, Route} from 'react-router-dom';
//import components
import Homepage from './pages/homePage';
import Resume from './pages/resume';
import Projects from './pages/projects';
import About from './pages/aboutme';
import Contact from './pages/contact';
import Products from './pages/products';



const Main = () => (
    <Switch>
        <Route exact path = "/" component={Homepage} />;
        <Route exact path = "/Projects" component={Projects} />;
        <Route exact path = "/Products" component={Products} />;
        <Route exact path = "/Resume" component={Resume} />;
        <Route exact path = "/About" component={About} />;
        <Route exact path = "/Contact" component={Contact} />;
    </Switch>
)

export default Main;