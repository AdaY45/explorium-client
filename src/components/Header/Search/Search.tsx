import React, { useState } from 'react';
import { SearchBar, SearchIcon } from "./styles";

const Search = () => {
    const [isVisible, setVisible] = useState(false);

    return (
        <>
            {
                isVisible ? 
                    <SearchBar type="text" placeholder="Почни свій пошук..." />
                :
                    <SearchIcon onClick={() => { setVisible(prev => !prev) }}></SearchIcon>
            }
        </>
    );
};

export default Search;
