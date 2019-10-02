import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from "./containers/Home";
import Tests from "./containers/Tests";
import NewTests from "./containers/NewTests";

class App extends Component {

    render() {
        return (
            <Router>
                <div className="App">
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/tests" component={Tests}/>
                    <Switch>
                        <Route path="/test/new" component={NewTests}/>
                    </Switch>
                </div>
            </Router>
        )
    }

}

export default App;
