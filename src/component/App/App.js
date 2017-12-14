import React, { PureComponent } from 'react';
import './App.scss';
import Navigation from '../Navigation/Navigation.js';
import Main from '../Main/Main';
import {withRouter} from 'react-router-dom';

class App extends PureComponent {
    render() {
        return (
           <div className='container'>
               <Navigation/>
               <Main/>
           </div>
        );
    }
}

export default withRouter(App);
