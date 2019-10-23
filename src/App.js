import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AppBar from "./components/AppBar";
import Contatos from "./containers/Contatos";
import Compromissos from "./containers/Compromissos";
import Convites from "./containers/Convites";

function App() {
  return (
    <Router>
      <div>
        <AppBar />
        <Container>
          <Fragment>
            <Route path="/" exact component={Contatos} />
            <Route path="/compromissos" component={Compromissos} />
            <Route path="/convites" component={Convites} />
          </Fragment>
        </Container>
      </div>
    </Router>
  );
}

export default App;
