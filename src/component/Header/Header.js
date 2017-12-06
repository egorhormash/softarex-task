import React, { Component } from 'react';
import './Header.css';
import UploadField from "../Fields/UploadField/UploadField";
import SearchField from "../Fields/SearchField/SearchField";
import LoginField from "../Fields/LoginField/LoginField";


class Header extends Component {
    render() {
        return (
            <header className='header'>
                <UploadField imagePreview={this.props.imagePreview}  />
                <SearchField/>
                <LoginField/>
            </header>

        );
    }
}

export default Header;
