import React from "react";
import { useState } from "react/cjs/react.development";

const Search = () => {
  const [searchVal, setSearchVal] = useState("");

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
            className="input"
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
