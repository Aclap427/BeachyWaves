import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../../components/Header/Header.js';
//import Footer from '../../components/Footer/Footer.js';
import './Main.css';

/*-----------------Pages----------*/
import Home from '../Home/Home';
import About from '../AboutPage/AboutPage';
import Stylists from '../Stylists/Stylists';
import Services from '../Services/Services';
import GlamWall from '../GlamWall/GlamWall';
import Contact from '../Contact/Contact';


function App() {
  return (
  <div id="main">
      <Header />

      <div>
        <Switch>
          <Route exact path="/" render={() => (
            <Home/>
          )} />
          
          <Route exact path="/About" render={() => (
            <About />
          )} />
          
          <Route exact path="/Stylists" render={() => (
            <Stylists />
          )} />

          <Route exact path="/Services" render={() => (
            <Services />
          )}/>
          
          <Route exact path="/GlamWall" render={() => (
            <GlamWall />
          )} />
          
          <Route exact path="/Contact" render={() => (
            <Contact />
          )} />
          
        </Switch>
    </div>
   
    
  </div>
  );
}

export default App;
