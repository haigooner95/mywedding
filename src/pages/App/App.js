import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Homepage from '../HomePage'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import './App.css';


const App = () => { 

  return (
    <div className="App">
       <Router>
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route path='/home' component={Homepage} />
          </Switch>
          <Footer/>
          <Scrollbar/>
      </Router>
      
    </div>
  );
}

export default App;
