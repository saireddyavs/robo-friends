import React from "react";

import "./SearchBox.css";

const SearchBox = () => {
    return (
        <div>
           
            <form class="searchbox" action="http://thecodeblock.com">
                <input type="search" placeholder="Search" />
                <button type="submit" value="search">&nbsp;</button>
            </form>
        </div>


    );

}

export default SearchBox;