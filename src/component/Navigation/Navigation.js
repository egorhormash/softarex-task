import React, { Component } from 'react';
import './Navigation.css';
import homeIcon from '../../static/images/home-icon.svg';
import messagesIcon from '../../static/images/messages-icon.svg';
import galleryIcon from '../../static/images/gallery-icon.svg';
import { NavLink } from 'react-router-dom'

class Navigation extends Component {
    render() {
        return (
            <nav className='navigation'>
                    <NavLink to='/home' activeClassName='nav-is-active' >
                        <img className='nav-home' src={homeIcon}/>
                    </NavLink>
                    <NavLink to='/messages' activeClassName='nav-is-active'>
                        <img className='nav-messages' src={messagesIcon}/>
                        <div className='msg-notification'>2</div>
                    </NavLink>
                    <NavLink exact={true} to='/' activeClassName='nav-is-active'>
                        <img className='nav-gallery' src={galleryIcon}/>
                    </NavLink>
            </nav>

        );
    }
}

export default Navigation;
