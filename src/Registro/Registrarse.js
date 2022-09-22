import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
function GridComplexExample() {
  return (
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Ingresar email" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Telefono</Form.Label>
            <Form.Control type="number" placeholder="Nro de telefono" />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridAddress1">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="alphabet" placeholder="Nombre" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridAddress2">
            <Form.Label>Apellido</Form.Label>
            <Form.Control placeholder="Apellido" />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridAddress1">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control placeholder="Contraseña" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridAddress2">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control placeholder="ReIngrese Contraseña" />
          </Form.Group>
        </Row>
      
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Ciudad</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Rol</Form.Label>
            <Form.Select defaultValue="Elegir">
              <option>Elegir</option>
              <option>Profesor</option>
              <option>Alumno</option>
            </Form.Select>
          </Form.Group>
        </Row>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
  );
}

export default GridComplexExample;