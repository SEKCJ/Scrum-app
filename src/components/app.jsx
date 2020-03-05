import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import home from './home'
import artifacts from './artifacts'
import events from './events'
import values from './values'
import roles from './roles'

class App extends Component {
    render() {
        return(
            <Router>
                <Switch>
                    <Route exact path="/roles" component={roles}/>
                    <Route exact path="/artifacts" component={artifacts}/>
                    <Route exact path="/events" component={events}/>
                    <Route exact path="/values" component={values}/>
                    <Route path="/" component={home}/>
                </Switch>
            </Router>
        )
    }
}

export default App;