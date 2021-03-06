import React, { useState } from "react";
import Dropdown from "./Dropdown";

const options = [
  {
    label: "the color red",
    value: "red",
  },

  {
    label: "the color green",
    value: "green",
  },

  {
    label: "the color Blue",
    value: "Blue",
  },
];

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);
  return (
    <div>
      <button onClick={() => setShowDropdown(!showDropdown)}>
        ToggleDropdown
      </button>
      {showDropdown ? (
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      ) : null}
    </div>
  );
};
