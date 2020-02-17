import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Voting from "./views/voting";
import { Vote } from "./components/HOC/vote";
import Add from "./views/add";
import Results from "./views/results";
import {
  BrowserRouter as Router,
  Route,
  withRouter,
  Switch
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Vote>
              <Voting />
            </Vote>
          </Route>
          <Route path="/add" exact component={Add} />
          <Route path="/results" exact component={Results} />
          {/*           <Route path="*" component={withRouter(NotFound)} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
