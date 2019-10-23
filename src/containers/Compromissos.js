import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Menu from "../components/Menu";
import CompromissosLista from "../components/Compromissos/Compromissos.Lista";
import CompromissosNovo from "../components/Compromissos/Compromissos.Novo";

const Compromissos = () => {
  return (
    <Router>
      <Menu
        Titulo="Compromissos"
        LinkNovo="/compromissos/novo"
        LinkLista="/compromissos/lista"
      />
      <Container>
        <Fragment>
          <Route path="/compromissos/novo" component={CompromissosNovo} />
          <Route path="/compromissos/lista" component={CompromissosLista} />
        </Fragment>
      </Container>
    </Router>
  );
};

export default Compromissos;
