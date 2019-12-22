import React, { Component } from 'react';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'
import './App.css';
import './w3.css';
import './Style.scss'
import Navigation from './components/Navigation';
import Home from './components/Home';
import AboutPage from './pages/AboutPage';
// import ServicesPage from './pages/ServicesPage';
// import PortfolioPage from './pages/PortfolioPage';
// import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';



class App extends Component {
  render() {
    return (

      <Router>
        <div>
         <Navigation logo="Qela Tech Limited"/>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/about" component={AboutPage}/>
            {/* <Route path="/services" component={ServicesPage}/>
            <Route path="/portfolio" component={PortfolioPage}/>
            <Route path="/contact" component={ContactPage}/> */}
            <Route component={Error}/>
          </Switch>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App
