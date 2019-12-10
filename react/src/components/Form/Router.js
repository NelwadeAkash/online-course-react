import React, { Component } from 'react'
import { BrowserRouter as Router,Switch,Route,Link } from 'react-router-dom';
import Login from './Login';
import About from './About';
import Home from './Home';



export class RouterElement extends Component {
    render() {
        return (
            <div>
                
               <Router>
                 <Switch>
                   <Route exact path='/' component={Home} />
                   <Route exact path='/login' component={Login}/>
                   <Route exact path='/about' component={About}/>
                   <Route exact path='/home' component={Home}/>
                 </Switch>
               </Router>

            </div>
        )
    }
}

export default RouterElement
