import React, { PureComponent } from 'react';
import './LoginField.scss';
import loginIcon from '../../../source/images/login-icon.svg';

class LoginField extends PureComponent {
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
