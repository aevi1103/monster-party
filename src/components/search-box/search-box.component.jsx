import React from 'react';
import './search-box.component.css'

const SeearchBox = ({ placeholder, handleChange }) => (

    <input
        className='search'
        type='search'
        placeholder={placeholder}
        onChange={handleChange}
    />

)

export default SeearchBox;
