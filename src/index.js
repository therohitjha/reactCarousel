import React, { useState } from "react";
import ReactDOM from "react-dom";
import Panel from "./Panel";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

import "./styles.scss";

function App() {
  const [value, setValue] = useState(0);
  function onChange(value) {
    setValue(value);
  }
  return (
    <div className="App">
      <Carousel
        value={value}
        onChange={onChange}
        arrows
        infinite
        slidesPerPage={4}
      >
        <Panel />
        <Panel />
        <Panel />
        <Panel />
        <Panel />
        <Panel />
      </Carousel>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
