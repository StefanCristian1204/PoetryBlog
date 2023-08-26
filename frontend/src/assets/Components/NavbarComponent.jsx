import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import {Container, Image, Nav, NavDropdown} from "react-bootstrap";

function NavbarComponent(props) {
    return (
        <Navbar collapseOnSelect={"lg"} style={{
            background: "rgba(255, 255, 255, 0.6)",
            borderRadius: "1em",
        }}>
            <Container>
                <Navbar.Brand href={"/"}> <Image className={" w-50"} src="./logo.png" alt={"logo"}/></Navbar.Brand>
                <Navbar.Toggle aria-controls={"responsive-navbar-nav"}/>
                <Navbar.Collapse id="responsive-navbar-nav"/>
                <Nav className="me-auto">
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider/>
                        <NavDropdown.Item href="#action/3.4">
                            Separated link
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link href="#deets">More deets</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                        Dank memes
                    </Nav.Link>
                </Nav>
                <Navbar.Collapse/>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;
