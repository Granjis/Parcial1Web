import 'bootstrap/dist/css/bootstrap.min.css';
import "./Login.css";
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function Login() {

    const [validesCampos, setValidesCampos] = useState({ emailState: true, passwordState: true });
    const [valoresCampos, setValoresCampos] = useState({ email: "", password: "" });
    const [esValido, setEsValido] = useState(false);
  
    const navigate = useNavigate();

    const handleEmailChange = ((entrada) => {
        setValoresCampos({ ...valoresCampos, email: entrada.target.value })
        if (entrada.target.value.includes("@") && entrada.target.value.includes(".")) {
            setValidesCampos({ ...validesCampos, emailState: true })
        
        }
        else {
            setValidesCampos({ ...validesCampos, emailState: false })

        }
    });

    const handlePasswordChange = ((entrada) => {

        setValoresCampos({ ...valoresCampos, password: entrada.target.value })
        setEsValido(/^[0-9a-zA-Z]+$/.test(entrada.target.value));
        if (entrada.target.value.length >= 8 && esValido) {
            setValidesCampos({ ...validesCampos, passwordState: true })
        }
        else {
            setValidesCampos({ ...validesCampos, passwordState: false })
        }
    });

    const clickLogin = (() => {

        const errors = [];
        if (valoresCampos.email === "" || valoresCampos.password === "") {
            alert("Fill all the fields")
        }
        else {
            if (!validesCampos.emailState) {
                errors.push("Email is not valid")
            
            }

            if (!validesCampos.passwordState) {
                errors.push("Password is not valid")
            }
            if (errors.length > 0) {
                alert(errors.join("\n"));
            } else {
                navigate("/mainMenu")
          
            }
        }

    });

    return (
        <div className="login-background-image">



            <Container className="login-container">
                <Row>
                    <h1 className="login-title">  Log in</h1>
                </Row>
                <Row>
                    <Container className='labels-container'>

                        <Form>
                            <Form.Group className='mb6' controlId='formEmail'>
                                <Form.Label> Email </Form.Label>
                                <Form.Control type='email' onChange={handleEmailChange} value={valoresCampos.email} className={!validesCampos.emailState ? 'is-invalid' : ''} />
                            </Form.Group>

                            <Form.Group className='mb6' controlId='formPassword'>
                                <Form.Label> Password </Form.Label>
                                <Form.Control type='password' onChange={handlePasswordChange} value={valoresCampos.password} className={!validesCampos.passwordState ? 'is-invalid' : ''} />
                            </Form.Group>

                            <Button variant="primary" onClick={clickLogin} className='login-button'>
                                Log in
                            </Button>

                        </Form>


                    </Container>
                </Row>

            </Container>

        </div>
    )

} export default Login;