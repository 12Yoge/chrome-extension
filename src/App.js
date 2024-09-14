import React, { useState, useEffect } from "react";
import { vocabulary } from "./vocabList";
import "../src/App.css";

const App = () => {
  const [randomNumber, setRandomNumber] = useState(
    Math.floor(Math.random() * vocabulary.length)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setRandomNumber(Math.floor(Math.random() * vocabulary.length));
    }, 3000);

    return () => clearInterval(interval);
  }, [vocabulary.length]);

  return (
    <div className="App">
      <h1>
        <span>Vocabulary Name:</span> {vocabulary[randomNumber].FIELD1}
      </h1>
      <h3>
        <span>Description: </span>
        {vocabulary[randomNumber].FIELD2}
      </h3>
    </div>
  );
};

export default App;
