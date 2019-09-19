import React from 'react';
import './App.css';
import Home from './pages/Home';
import Room from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/rooms/" component={Room} />
      <Route exact path="/rooms/:name" component={SingleRoom} />
      <Route component={Error}/>
      </Switch>
    </div>
  );
}

export default App;
