import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { getAuth, updateProfile } from "firebase/auth";
import useAuth from '../../../hooks/useAuth';



const Login = () => {
    const auth = getAuth();


    const { user, googleSignIn, handleRegister, handleEmailChange, handlePasswordChange, error, toggle, isLogin, handleResetPassword, } = useAuth();



    return (
        <div className="container">
            <h2>Please {isLogin ? "Login" : "Register"}</h2>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    {!isLogin && <><Form.Label>Name</Form.Label>
                        <Form.Control type="email" placeholder="Enter Name" /></>}


                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group onChange={toggle} className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label={isLogin ? "Already Registered!!" : "Please Register"} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    {isLogin ? "Login" : "Register"}
                </Button>
                <br /><br />
                <Button onClick={handleResetPassword} variant="primary" type="submit">
                    Reset password
                </Button>
            </Form>

            <p className="text-danger">{error}</p>
            <br /><br />
            <Button className="mb-3" onClick={googleSignIn} variant="primary"><i className="fab fa-google text-warning"></i> Google Sign In</Button>
        </div >
    );
};

export default Login;