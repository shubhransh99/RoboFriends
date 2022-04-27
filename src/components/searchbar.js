import React from 'react';

const SearchBar = ({searchChange}) => {
    return (
        <div className="pa2">
            <input 
                className="pa3 ba bg-lightest-blue"
                type="text"  
                placeholder='search robots'
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBar;