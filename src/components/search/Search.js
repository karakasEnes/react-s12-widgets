import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import axios from "axios";

const Search = () => {
  const [searchVal, setSearchVal] = useState("programming");
  const [results, setResults] = useState([]);

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

    const timeoutID = setTimeout(() => {
      if (searchVal) {
        search();
      }
    }, 1000);

    return () => {
      clearTimeout(timeoutID);
    };
  }, [searchVal]);

  const renderResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
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
