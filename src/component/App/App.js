import React, { Component } from 'react';
import './App.css';
import Navigation from '../Navigation/Navigation.js';
import Main from '../Main/Main';

class App extends Component {
    render() {
        return (
           <div className='container'>
               <Navigation/>
               <Main/>
           </div>
        );
    }
}

export default App;
