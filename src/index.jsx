import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes";
import { BrowserRouter as Router } from "react-router-dom";
import { FilmContextProvider } from "./contexts/film-context-service";

const App = () => {
  return (
    <div>
      <FilmContextProvider>
        <Router>
          <Routes />
        </Router>
      </FilmContextProvider>
    </div>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
