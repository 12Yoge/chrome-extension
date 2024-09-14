import React from "react";
import { vocabulary } from "./vocabList";
import "../src/App.css";

const App = () => {
  const randomNumber = Math.floor(
    Math.random() * Math.floor(vocabulary.length)
  );

  return (
    <div className="App">
      <h1>{vocabulary[randomNumber].FIELD1}</h1>
      <h3>{vocabulary[randomNumber].FIELD2}</h3>
    </div>
  );
};

export default App;
