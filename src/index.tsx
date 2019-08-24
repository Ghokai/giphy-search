import "antd/dist/antd.css";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import AppWrapper from "./components/AppWrapper";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<AppWrapper />, document.getElementById("root"));

serviceWorker.unregister();
