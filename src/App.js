import React, { useState } from "react";
import Accordion from "./components/accordion/Accordion";
import Translate from "./components/translate/Translate";
import Dropdown from "./components/dropdown/Dropdown";
import Route from "./components/nav/Route";
import Header from "./components/nav/Header";

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

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>

      <Route path="/dropdown">
        <Dropdown
          label={"Select a Color"}
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>

      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};

export default App;
