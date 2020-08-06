import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import UserForm from './Components/UserForm';


function App() {
  return (
    <Router>
        <Switch>
          
          <Route path="/users">
            <UserForm/>
          </Route>

          <Route path="/">
            <h1>HOME</h1>
          </Route>

        </Switch>
    </Router>
   
  );
}

export default App;
