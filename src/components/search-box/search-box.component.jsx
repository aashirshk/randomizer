import React from 'react';
import './search-box.styles.css';

export const SearchBox = ({placeholder, handleChange, changeUserResult, placeholder1}) => (
    <div>
        <input className="search"
            type="search" 
            onChange={handleChange}
            placeholder={placeholder}/>
            <br/>
        <input className="search"
            type="number" 
            onChange={changeUserResult}
            placeholder={placeholder1}/>
    </div>
    
)