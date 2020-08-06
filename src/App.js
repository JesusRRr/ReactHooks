import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Users from './Components/Users';


function App() {
  return (
    <Router>
        <Switch>
          
          <Route path="/users">
            <Users/>
          </Route>

          <Route path="/">
            <h1>HOME</h1>
          </Route>

        </Switch>
    </Router>
   
  );
}

export default App;
