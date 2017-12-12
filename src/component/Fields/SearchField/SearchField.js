import React, { PureComponent } from 'react';
import './SearchField.scss';

class SearchField extends PureComponent {
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