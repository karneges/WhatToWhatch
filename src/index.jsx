import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Routes />
      </Router>
    </div>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
