import React, { useState } from "react";

import { Form, Col, Row, Button } from "react-bootstrap";

const ContatosNovo = () => {
  const [validated, setValidated] = useState(false);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [endereco, setEndereco] = useState("");
  const [telefone, setTelefone] = useState("");
  const [telemovel, setTelemovel] = useState("");

  const handleSubmit = event => {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const handleNomeChange = ({ target: { value } }) => setNome(value);
  const handleEmailChange = ({ target: { value } }) => setEmail(value);
  const handleEnderecoChange = ({ target: { value } }) => setEndereco(value);
  const handleTelefoneChange = ({ target: { value } }) => setTelefone(value);
  const handleTelemovelChange = ({ target: { value } }) => setTelemovel(value);

  return (
    <>
      <fieldset>
        <legend>Dados</legend>

        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group as={Row} controlId="formNome">
            <Form.Label column sm={2}>
              Nome:
            </Form.Label>

            <Col sm={10}>
              <Form.Control
                type="text"
                placeholder="Nome"
                value={nome}
                onChange={handleNomeChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                Campo Nome é requerido.
              </Form.Control.Feedback>
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formEmail">
            <Form.Label column sm={2}>
              E-mail
            </Form.Label>

            <Col sm={10}>
              <Form.Control
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
                required
              />

              <Form.Control.Feedback type="invalid">
                Digite um e-mail válido.
              </Form.Control.Feedback>
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formEndereco">
            <Form.Label column sm={2}>
              Endereço:
            </Form.Label>

            <Col sm={10}>
              <Form.Control
                type="text"
                placeholder="Endereço"
                value={endereco}
                onChange={handleEnderecoChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                Campo Endereço é requerido.
              </Form.Control.Feedback>
            </Col>
          </Form.Group>

          <Row noGutters={false}>
            <Col sm={6}>
              <Form.Group as={Row} controlId="formTelefone">
                <Form.Label column sm={4}>
                  Telefone:
                </Form.Label>

                <Col sm={8}>
                  <Form.Control
                    type="tel"
                    placeholder="Telefone"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
                    value={telefone}
                    onChange={handleTelefoneChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Telefone inválido. Ex: 999-999-999.
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>
            </Col>

            <Col sm={6}>
              <Form.Group as={Row} controlId="formTelemovel">
                <Form.Label column sm={3}>
                  Telemóvel:
                </Form.Label>

                <Col sm={9}>
                  <Form.Control
                    type="tel"
                    placeholder="Telemóvel"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
                    value={telemovel}
                    onChange={handleTelemovelChange}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Telemóvel inválido. Ex: 999-999-999.
                  </Form.Control.Feedback>
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
            <Col sm={12}>
              <label>Nome: {nome}</label>
              <label>Email: {email}</label>
              <label>Endereço: {endereco}</label>
              <label>Telefone: {telefone}</label>
              <label>Telemóvel: {telemovel}</label>
            </Col>
          </Row>
        </Form>
      </fieldset>
    </>
  );
};

export default ContatosNovo;
