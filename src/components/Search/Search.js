import React from 'react';

const Search = ({handleSearch,search}) => {
    return (
        <div>
             <div>
                <div>
                    Search:
                </div>
                <input value={search} onChange={handleSearch}/>
            </div>
        </div>
    );
};

export default Search;