import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import RagistrationForm from '../Page/Ragistration';
import List from '../Page/List/List';
import { Button, NavItem } from 'react-bootstrap';
import { NavigationIcon, User } from 'lucide-react';


function NavBar() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Anna-Pūrṇa</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Donate</Nav.Link>
                        <Nav.Link href="#about">What We Do?</Nav.Link>
                        <Nav.Link href="./Page/Ragistration.js">Ragister Here</Nav.Link>
                        <Nav.Link href="#List">Get Food List</Nav.Link>
                        <Nav.Link href="#Login"><User />Login</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
<RagistrationForm /> 
<List />


        </>
    );
}

export default NavBar;