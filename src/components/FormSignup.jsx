import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function Signup() {
  return (
    <Form className='w-50  m-auto'>
      <Row className="mb-3 ">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>first name</Form.Label>
          <Form.Control placeholder="first name" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>last name</Form.Label>
          <Form.Control placeholder="last name" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Password</Form.Label>
        <Form.Control  type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>email</Form.Label>
        <Form.Control  type="email" placeholder="Enter email" />
      </Form.Group>
<div className='text-center '>
      <Button variant="primary"  type="submit">
        Sign up
      </Button>
</div>
    </Form>
  );
}

export default Signup;