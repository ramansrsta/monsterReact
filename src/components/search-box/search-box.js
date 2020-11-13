import React from 'react';
import './search-box.css';

const SearchBox = props => {
    return (
        <input
        className='search'
        type = 'search'
        placeholder = 'Input your search Term'
        onChange={ props.changed }
        />
    )
}

export default SearchBox;