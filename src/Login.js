import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
function Login() {

    const [validationStates, setValidationStates] = useState({ emailState: true, passwordState: true });
  
    const [formValues, setFormValues] = useState({ email: "", password: "", favClass: "1" })
  
    const [isValid, setIsValid] = useState([false]);
  
    const handleEmailChange = ((e) => {
  
      setFormValues({ ...formValues, email: e.target.value })
      if (formValues.email.includes("@") && formValues.email.includes(".")) {
        setValidationStates({ ...validationStates, emailState: true })
        console.log("Email  is valid")
      }
      else {
        setValidationStates({ ...validationStates, emailState: false })
        console.log("Email  is invalid")
      }
  
    });
  
    const handlePasswordChange = ((e) => {
  
      setFormValues({ ...formValues, password: e.target.value })
      setIsValid( /^[0-9a-zA-Z]+$/.test(formValues.password));
  
      if (formValues.password.length >= 9 && isValid) {
        setValidationStates({ ...validationStates, passwordState: true })
      }
      else {
        setValidationStates({ ...validationStates, passwordState: false })
      }
  
    });
  
    const handleSelectChange = ((e) => {
      setFormValues({ ...formValues, favClass: e.target.value })
  
    });
  
  
  
    const clickSubmit = (() => {
  
      const errors = [];
  
      if (formValues.email === "" || formValues.password === "") {
        alert("Fill all the fields")
      }
      else {
        if (!validationStates.emailState) {
          errors.push("Email is not valid")
        }
        if (!validationStates.passwordState) {
          errors.push("Password is not valid")
        }
        if (errors.length > 0) {
          alert(errors.join("\n"));
        } else {
          alert(JSON.stringify(formValues));
        }
      }
  
    });
  
    return (
      <div>
        <h1>Login</h1>
  
        <Form>
          <Form.Group className="mb-6" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={handleEmailChange} value={formValues.email} className={!validationStates.emailState ? 'is-invalid' : ''} />
            {!validationStates.emailState && <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>}
          </Form.Group>
  
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange} value={formValues.password} className={!validationStates.passwordState ? 'is-invalid' : ''} />
            {!validationStates.passwordState && <Form.Text className="text-muted">Your password should be have numbers and letters and should be at least 9 char long</Form.Text>}
          </Form.Group>
          < Link to="/mainMenu/">
          <Button variant="primary" onClick={clickSubmit}>
          login
          </Button>
          </Link>
        </Form>
      </div>
    );
  }
  
  export default Login; 