import React, { Component } from 'react';
import './LoginField.css';
import loginIcon from '../../../static/images/login-icon.svg';

class LoginField extends Component {
    render() {
        return (
                <div className='login'>
                    <button className='login-btn' type='submit'>
                        <img src={loginIcon} alt='Login'/>
                        <span className='login-btn-text'>Log in</span>
                    </button>
                </div>
        );
    }
}

export default LoginField;
