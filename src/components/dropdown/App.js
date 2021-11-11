import React from "react";
import Search from "./Search";
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
];
class App extends React.Component {
  render() {
    return (
      <div>
        <Dropdown options={options} />
      </div>
    );
  }
}

export default App;
