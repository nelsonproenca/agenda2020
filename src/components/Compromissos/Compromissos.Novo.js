import React, { useState } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";

const CompromissosNovo = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = event => {
    const form = event.currentTarget;
    console.log("validated_ini", validated);

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);

    console.log("validated_end", validated);
  };

  return (
    <>
      <fieldset>
        <legend>Dados</legend>

        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group as={Row} controlId="formTitulo">
            <Form.Label column sm={2}>
              Título:
            </Form.Label>

            <Col sm={10}>
              <Form.Control type="text" placeholder="Titulo" required />
              <Form.Control.Feedback type="invalid">
                Campo Título é requerido.
              </Form.Control.Feedback>
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formDescricao">
            <Form.Label column sm={2}>
              Descrição
            </Form.Label>

            <Col sm={10}>
              <Form.Control type="text" placeholder="Descrição" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formLocal">
            <Form.Label column sm={2}>
              Local:
            </Form.Label>

            <Col sm={10}>
              <Form.Control type="text" placeholder="Local" required />
              <Form.Control.Feedback type="invalid">
                Campo Local é requerido.
              </Form.Control.Feedback>
            </Col>
          </Form.Group>

          <Row noGutters={false}>
            <Col sm={6}>
              <Form.Group as={Row} controlId="formHorarioInicial">
                <Form.Label column sm={4}>
                  Horário Inicial:
                </Form.Label>

                <Col sm={8}>
                  <Form.Control
                    type="datetime-local"
                    required                    
                  />
                </Col>
              </Form.Group>
            </Col>

            <Col sm={6}>
              <Form.Group as={Row} controlId="formHorarioFinal">
                <Form.Label column sm={3}>
                  Horário Final:
                </Form.Label>

                <Col sm={9}>
                  <Form.Control
                    type="datetime-local"
                    required
                  />
                </Col>
              </Form.Group>
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

export default CompromissosNovo;
