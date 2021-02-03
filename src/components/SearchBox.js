import React from "react";

import "./SearchBox.css";

const SearchBox = ({ SearchChange }) => {
    return (
        <div>

            <div className="searchbox" >
                <input type="search" placeholder="Search Your Robo Friend" onChange={SearchChange} />
                <button type="submit" value="search">&nbsp;</button>
            </div>
        </div>


    );

}

export default SearchBox;