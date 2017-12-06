import React, { Component } from 'react';
import './SearchField.css';

class SearchField extends Component {
    render() {
        return (
            <div className='search-field'>
                <span className='icon'>
                    <i className='fa fa-search '></i>
                </span>
                <input type='search' className='search' placeholder='Search'/>
            </div>
        );
    }
}

export default SearchField;