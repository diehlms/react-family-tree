import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Pages/Home/Home'
import FamilyShow from './components/Pages/FamilyShow/FamilyShow'
import About from './components/Pages/About/About'
import Banner from './components/UI/Banner/Banner'

function App() {
  return (
      <div className="App">
        <Banner />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/home' component={Home} />
          <Route path='/families/:id' component={FamilyShow}/>
          <Route path='/about' component={About}/>
        </Switch>
      </div>
  );
}

export default App;
