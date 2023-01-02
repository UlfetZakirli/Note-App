import { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
const Search = ({handleSearchInput}) => {


    return (
        <div className="search">
            <BiSearchAlt size="1.3rem" />
            <input
                type="text"
                placeholder="Type to search..."
                onChange={(e) => handleSearchInput(e.target.value)}
            />
        </div>
    )
}

export default Search