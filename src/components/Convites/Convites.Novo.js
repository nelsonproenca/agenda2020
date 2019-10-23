import React, { useState } from "react";

import { Form, Col, Row, Button, Table } from "react-bootstrap";

const ConvitesNovo = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = event => {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <>
      <fieldset>
        <legend>Dados</legend>

        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group as={Row} controlId="formNome">
            <Form.Label column sm={2}>
              Nome:
            </Form.Label>

            <Col sm={5}>
              <Form.Control as="select">
                <option>Aniversário</option>
                <option>Casamento</option>
                <option>Happy Hour</option>
                <option>Virada</option>
                <option>Natal</option>
              </Form.Control>
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formCompromisso">
            <Form.Label column sm={2}>
              Compromisso:
            </Form.Label>

            <Col sm={4}>
              <Form.Control type="text" placeholder="Compromisso" required />
            </Col>
            <Col sm={4}>
              <Form.Check
                custom
                inline
                type="checkbox"
                label="procurar somente no título."
                id="custom-inline-1"
              />
            </Col>
            <Col sm={2}>
              <Button type="submit" block={true}>
                Buscar
              </Button>
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formContato">
            <Form.Label column sm={2}>
              Contato:
            </Form.Label>

            <Col sm={4}>
              <Form.Control type="text" placeholder="Contato" required />
            </Col>
            <Col sm={4}>
              <Form.Check
                custom
                inline
                type="checkbox"
                label="procurar somente no nome."
                id="custom-inline-2"
              />
            </Col>
            <Col sm={2}>
              <Button type="submit" block={true}>
                Buscar
              </Button>
            </Col>
          </Form.Group>

          <Row>
            <Col sm={12}>
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Telemovel</th>
                    <th>E-mail</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark Otto</td>
                    <td>999 999 999</td>
                    <td>Mark.Otto@contoso.com</td>
                    <td>
                      <Button variant="link">Remover</Button>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob Thornton</td>
                    <td>999 999 999</td>
                    <td>Jacob.Thornton@contoso.com</td>
                    <td>
                      <Button variant="link">Remover</Button>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Larry The Bird</td>
                    <td>999 999 999</td>
                    <td>Larry.The.Bird@contoso.com</td>
                    <td>
                      <Button variant="link">Remover</Button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>

          <Row>
            <Col sm={10}></Col>
            <Col sm={2}>
              <Button type="submit" block={true}>
                Salvar
              </Button>
            </Col>
          </Row>

          <Row>
            <Col sm={6}>
              <label></label>
            </Col>

            <Col sm={6}></Col>
          </Row>
        </Form>
      </fieldset>
    </>
  );
};

export default ConvitesNovo;
