import React, { PureComponent } from 'react';
import './UnderConstructionPage.scss'
import toolsIcon from '../../source/images/tools.svg'

class UnderConstruction extends PureComponent {
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
