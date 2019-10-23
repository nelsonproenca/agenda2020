import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import Menu from "../components/Menu";
import ConvitesNovo from "../components/Convites/Convites.Novo";
import ConvitesLista from "../components/Convites/Convites.Lista";

const Convites = () => {
  return (
    <Router>
      <Menu
        Titulo="Convites"
        LinkNovo="/convites/novo"
        LinkLista="/convites/lista"
      />
      <Container variant="fluid">
        <Fragment>
          <Route path="/convites/novo" component={ConvitesNovo} />
          <Route path="/convites/lista" component={ConvitesLista} />
        </Fragment>
      </Container>
    </Router>
  );
};

export default Convites;
