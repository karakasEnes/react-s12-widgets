import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import axios from "axios";

const Search = () => {
  const [searchVal, setSearchVal] = useState("");
  const [result, setResult] = useState([]);

  console.log(result);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          format: "json",
          origin: "*",
          srsearch: searchVal,
        },
      });

      setResult(data.query.search);
    };

    if (!searchVal) return;
    search();
  }, [searchVal]);

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
