import React from 'react';
import UserForm from './components/users/UserForm';
import UserData from './components/users/UserData';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

function App(){
  return (
      <>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/" exact component={UserData} />
            <Route path="/add-item" exact component={UserForm} />
            <Route>404 not found</Route>
          </Switch>
        </Router>
      </Provider>


      
      </>
  )   
}


export default App;
