import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from './redux';
import { Provider } from 'react-redux';


import Header from './components/header';
import Login from './components/login';
import Register from './components/register';
import Index from './components/index';
import Profile from './components/profile';


class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <Router>
                <div>
                    <Header />
                    <Switch>
                    <Route exact  path="/" component={Index} />
                    <Route path="/register" component={Register} />
                    <Route path="/login" component={Login} />
                    <Route path="/profile/:id" component={Profile} />
                    </Switch>
                </div>
            </Router>
        </Provider>
    );
  }
}

export default App;
