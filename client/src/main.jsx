import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
//import { TransactionsProvider } from "./context/TransactionContext";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
