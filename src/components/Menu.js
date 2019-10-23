import React, { useState, useEffect } from "react";
import { Col, Row, Nav, Container } from "react-bootstrap";
import { withRouter } from "react-router-dom";

const Menu = props => {
  const [titulo, setTitulo] = useState("");
  const handleNavClick = link => {
    props.history.push(link);
  };

  useEffect(() => {
    setTitulo(props.Titulo);
  }, [props.Titulo]);

  return (
    <div>
      <Container>
        <Row>
          <label></label>
        </Row>
        <Row>
          <Col sm={8}>
            <h1>{titulo}</h1>
          </Col>
          <Col sm={4}>
            <Nav variant="pills" defaultActiveKey="/home">
              <Nav.Item>
                <Nav.Link
                  eventKey="link-1"
                  onClick={() => {
                    handleNavClick(props.LinkNovo);
                  }}
                >
                  Dados
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="link-2"
                  onClick={() => {
                    handleNavClick(props.LinkLista);
                  }}
                >
                  Lista
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
      </Container>
      <hr />
    </div>
  );
};

export default withRouter(Menu);
