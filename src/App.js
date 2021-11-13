import React from "react";
import Accordion from "./components/accordion/Accordion";
import Translate from "./components/translate/Translate";
import Dropdown from "./components/dropdown/Dropdown";

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

const showAccordion = () => {
  if (window.location.pathname === "/") {
    return <Accordion items={items} />;
  }
};

const showTranslate = () => {
  if (window.location.pathname === "/translate") {
    return <Translate />;
  }
};

const showDropdown = () => {
  if (window.location.pathname === "/dropdown") {
    return <Dropdown label={"Select A Color"} options={options} />;
  }
};

const App = () => {
  return (
    <div>
      {showAccordion()}
      {showTranslate()}
      {showDropdown()}
    </div>
  );
};

export default App;
