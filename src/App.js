import React, { Component } from 'react';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'
import './App.css';
import './w3.css';
import './Style.scss'
import Navigation from './components/Navigation';
import Home from './components/Home';
import AboutPage from './pages/AboutPage';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';



class App extends Component {
  render() {
    return (

      <Router>
        <div>
         <Navigation logo="Qera Tech Limited"/>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/about_us" component={AboutPage}/>
            <Route path="/services" component={Services}/>
            <Route path="/portfolio" component={Portfolio}/>
            <Route path="/contact" component={Contact}/>
            <Route component={Error}/>
          </Switch>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App
