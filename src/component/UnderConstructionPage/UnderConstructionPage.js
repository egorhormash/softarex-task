import React, { Component } from 'react';
import './UnderConstructionPage.scss'
import toolsIcon from '../../source/images/tools.svg'

class UnderConstruction extends Component {
    render() {
        return (
            <div className='under-construction-block'>
             <p>Sorry, this page is under construction. Please come back soon!</p>
                <img src={toolsIcon}/>
            </div>
        );
    }
}

export default UnderConstruction;
