import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { SWRConfig } from "swr";

const fetcher = async (input, init) => {
  const res = await fetch(input, init);
  return res.json();
};

ReactDOM.render(
  <React.StrictMode>
    <SWRConfig value={{ fetcher }}>
      <App />
    </SWRConfig>
  </React.StrictMode>,
  document.getElementById("root")
);
