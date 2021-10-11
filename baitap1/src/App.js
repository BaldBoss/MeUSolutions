import './App.css';
import Header from './Component/Header';
import Content from './Component/Content'
import Edit from './Component/Edit'
import { useState } from 'react';
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom';


function App() {
  const [state, setState] = useState({
    name:"John Wick",
    email: "donottake@mydog.com",
    contact: "0123456789",
    gender: 'Male',
    note: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  })
  const UpdateInfo = (data) =>{
    setState(data)
  }
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Content info={state}></Content>
          </Route>
          <Route path="/edit">
            <Edit info={state} onSave={UpdateInfo}></Edit>
          </Route>
        </Switch>
      </Router>
      
      
    </div>
  );
}

export default App;
