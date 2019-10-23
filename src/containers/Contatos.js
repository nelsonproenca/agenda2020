import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import Menu from "../components/Menu";
import ContatosNovo from "../components/Contatos/Contatos.Novo";
import ContatosLista from "../components/Contatos/Contatos.Lista";

const Contatos = () => {
  return (
    <Router>
      <Menu
        Titulo="Contatos"
        LinkNovo="/contatos/novo"
        LinkLista="/contatos/lista"
      />
      <Container variant="fluid">
        <Fragment>
          <Route path="/contatos/novo" component={ContatosNovo} />
          <Route path="/contatos/lista" component={ContatosLista} />
        </Fragment>
      </Container>
    </Router>
  );
};

export default Contatos;
