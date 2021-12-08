// Navbar component imported directly from react-bootstrap

import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import ButtonCust from './ButtonCust'
import { AiOutlineQuestionCircle } from 'react-icons/ai'

const NavBar = () => {
    return (
        <div>
            <Navbar fixed="top" collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">Canva</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <NavDropdown title="Discover" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Design Types</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Features</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#help"><AiOutlineQuestionCircle style={{fontSize: 35}} /></Nav.Link>
                            <Nav.Link href="#login"><ButtonCust text='Login' variant='light' /></Nav.Link>
                            <Nav.Link href="#Signup"><ButtonCust text='Signup' variant='primary' /></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar
