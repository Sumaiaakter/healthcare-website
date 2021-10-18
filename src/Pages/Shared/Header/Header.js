import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logOut, isLogin } = useAuth();
    return (
        <>
            <Navbar sticky="top" bg="dark" variant="dark" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="#home"> <i class="fas fa-hospital-symbol"></i> Health Center</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/about">About us</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#doctors">Doctors</Nav.Link>
                        {user?.email ? <Button onClick={logOut} variant="primary">Logout</Button> :
                            <Nav.Link as={HashLink} to="/login">Login</Nav.Link>}
                        {isLogin ? <Navbar.Text >
                            Signed in as: <a href="#login">{user?.email}</a>
                        </Navbar.Text> :
                            <Navbar.Text >
                                Signed in as: <a href="#login">{user?.displayName}</a>
                            </Navbar.Text>}
                    </Navbar.Collapse>


                </Container>
            </Navbar>
        </>
    );
};

export default Header;