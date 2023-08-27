import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import {Container, Image, Nav, NavDropdown} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import {useAuthContext} from "../../hooks/useAuthContext.jsx";
import {useLogout} from "../../hooks/useLogout.jsx";

function NavbarComponent(props) {
    const navigate = useNavigate();
    const {user} = useAuthContext();
    const {logout} = useLogout();
    return (
        <Navbar collapseOnSelect={"lg"} style={{
            background: "rgba(255, 255, 255, 0.6)",
            borderRadius: "1em",
        }}>
            <Container>
                <Navbar.Brand href={"/"}> <Image className={"w-50"} src="./logo.png" alt={"logo"}/></Navbar.Brand>
                <Nav.Link onClick={() => navigate("/")}> Home</Nav.Link>
                <Nav.Link onClick={() => navigate("/dashboard")}>Poems</Nav.Link>
                <Nav.Link onClick={() => navigate("/")}>Contact</Nav.Link>
            </Container>
            <Container className={"d-flex"}>
                {!user ? (<Nav>
                    <Nav.Link onClick={() => navigate("/register")}>Register</Nav.Link>
                    <Nav.Link onClick={() => navigate("/login")}>Login</Nav.Link>
                </Nav>) : (
                    <Nav>
                        <Nav.Link><strong>Logged as: </strong>  {user.user.username}</Nav.Link>
                        <Nav.Link onClick={()=> logout()}>Logout</Nav.Link>
                    </Nav>)}
            </Container>
            <Navbar.Collapse/>
        </Navbar>
    );
}

export default NavbarComponent;
