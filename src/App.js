import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import Header from './component/header';
import Home from './page/Home';

function App() {
  return (
    <Router>
         <div className="App">
           <Header></Header>
           <div className='App__btn'><i class="fas fa-shipping-fast"></i></div>
          <Switch>
            <Route path='/' component={Home}></Route>
          </Switch>
        </div>
    </Router>
   
  );
}

export default App;
