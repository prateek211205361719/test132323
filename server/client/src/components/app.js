
import React,{ Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './header';
import Survey from './survey';
import Landing from './landing';
class App extends Component{
    componentDidMount(){
        this.props.fetchUser();

    }

    render(){
        return(
            <div>
               
                <BrowserRouter>
                 
                    <div>
                       <Header />
                       <Route exact={true} path="/" component={Landing}></Route>
                       <Route path="/surveys" component={Survey}></Route>
                    </div>
                </BrowserRouter>
            </div>
        );

    }
}

export default connect(null, actions)(App);