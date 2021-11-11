import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import axios from "axios";

const Search = () => {
  const [searchVal, setSearchVal] = useState("");
  const [results, setResults] = useState([]);

  console.log(results);

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

      setResults(data.query.search);
    };

    if (!searchVal) return;
    search();
  }, [searchVal]);

  const renderResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="content">
          <div className="header">{result.title}</div>
        </div>
        {result.snippet}
      </div>
    );
  });

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

      <div className="ui celled list">{renderResults}</div>
    </div>
  );
};

export default Search;
