import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logOut, name } = useAuth();
    return (
        <>
            <Navbar sticky="top" bg="dark" variant="dark" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="#home"> <i class="fas fa-hospital-symbol"></i> Health Center</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/about">About us</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#doctors">Doctors</Nav.Link>

                        <Nav.Link as={HashLink} to="/academic">Academic</Nav.Link>

                        <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                        {user?.email ? <Button onClick={logOut} variant="primary">Logout</Button> :
                            <Nav.Link as={HashLink} to="/login">Login</Nav.Link>}
                        <Navbar.Text >
                            <a href="#login">{user?.email}</a>
                        </Navbar.Text>

                        <Navbar.Text >
                            Name: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>


                </Container>
            </Navbar>
        </>
    );
};

export default Header;