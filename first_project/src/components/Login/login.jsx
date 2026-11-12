import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './login.css';
import rocket from '/assets/rocket.png';

function Login() {
  return (
  <div class="loginBox">
    <img id="rocket-image" src={rocket} alt="Rocket" />
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <Button id="forgotPassword" type="button">
        Forgot password?
      </Button>
      {/* <Form.Group className="mb-3">
        <Form.Check type="button" onClick={() => console.log("Forgot password clicked")} place="Forgot password?" />
      </Form.Group> */}
    </Form>
    </div>
  );
}

export default Login;