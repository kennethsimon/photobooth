import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard';
import Postdetails from './components/posts/Postdetails'
import Signin from './components/auth/Signin'
import Signup from './components/auth/Signup'
import Submitphoto from './components/posts/Submitphoto'
import Explore from './components/Explore/Explore'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
       <Navbar/>
       <Switch>
         <Route exact path='/' component={Dashboard}/>
         <Route path='/post/:id' component={Postdetails}/>
         <Route exact path='/signin' component={Signin}/>
         <Route exact path='/signup' component={Signup}/>
         <Route exact path='/submitphoto' component={Submitphoto}/>
         <Route exact path='/explore' component={Explore}/>
       </Switch>
      </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
