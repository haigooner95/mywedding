import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from '../HomePage';
import Scrollbar from '../../components/scrollbar';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
        </Switch>
        <Scrollbar />
      </Router>
    </div>
  );
};

export default App;
