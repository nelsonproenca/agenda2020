import React from "react";
import { withRouter } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const AppBar = ({ history }) => (
  <>
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Navbar.Brand href="#home">Agenda 2020</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link
            onClick={() => {
              history.push("/");
            }}
          >
            Contatos
          </Nav.Link>
          <Nav.Link
            onClick={() => {
              history.push("/compromissos");
            }}
          >
            Compromissos
          </Nav.Link>
          <Nav.Link
            onClick={() => {
              history.push("/convites");
            }}
          >
            Convites
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link eventKey={2}>Trocar Usuário</Nav.Link>
          <Nav.Link eventKey={2}>Sair</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </>
);

export default withRouter(AppBar);
