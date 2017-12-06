import React, { Component } from 'react';
import Gallery from '../Gallery/Gallery'
import { Switch, Route } from 'react-router-dom'
import UnderConstructionPage from "../UnderConstructionPage/UnderConstructionPage";

class Main extends Component {
    render() {
        return (
                <Switch>
                    <Route  path='/home' component={UnderConstructionPage}/>
                    <Route path='/messages' component={UnderConstructionPage}/>
                    <Route exact path='/' component={Gallery}/>
                </Switch>
        );
    }
}

export default Main;
