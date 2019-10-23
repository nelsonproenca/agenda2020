import React from "react";
import { Table, Button } from "react-bootstrap";

const ConvitesLista = () => {
  return (
    <div>
      <fieldset>
        <legend>Lista</legend>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Tipo</th>
              <th>Compromisso</th>
              <th>Nome</th>
              <th>Telemovel</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Aniversário</td>
              <td>Mussum Ipsum, cacilds vidis litro abertis.</td>
              <td>Mark Otto</td>
              <td>999 999 999</td>
              <td>
                <Button variant="link">Remover</Button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Aniversário</td>
              <td>Mussum Ipsum, cacilds vidis litro abertis.</td>
              <td>Jacob Thornton</td>
              <td>999 999 999</td>
              <td>
                <Button variant="link">Remover</Button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Casamento</td>
              <td>
                Mussum Ipsum, cacilds vidis litro abertis. Paisis, filhis,
                espiritis santis.
              </td>
              <td>Larry The Bird</td>
              <td>999 999 999</td>
              <td>
                <Button variant="link">Remover</Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </fieldset>
    </div>
  );
};

export default ConvitesLista;
