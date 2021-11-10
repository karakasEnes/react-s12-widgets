import React from "react";
import Accordion from "./Accordion";

const items = [
  {
    title: "One",
    content: "explain ONe",
  },
  {
    title: "Two",
    content: "explain ONe",
  },
  {
    title: "Three",
    content: "explain ONe",
  },
];
class App extends React.Component {
  render() {
    return (
      <div>
        <Accordion items={items} />
      </div>
    );
  }
}

export default App;
