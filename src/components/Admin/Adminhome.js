import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Adminhome = () => {
  return (
    <div>
         <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        
        {/* <Image src={logo} className='homelogo' roundedCircle /> */}
        <Navbar.Brand>Admin</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/viewprofile">Profile</Nav.Link>
            {/* <Nav.Link href="#pricing">Manage Budget</Nav.Link> */}
           
          </Nav>
          <Nav>
          <NavDropdown title="Manage" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Budget</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Expense
              </NavDropdown.Item>
              
            </NavDropdown>
            <NavDropdown title="Complaint" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="/complaint">View Complaint</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                 Reply
              </NavDropdown.Item>
             
            </NavDropdown>

            <Nav.Link eventKey={2} href="/login" >
              View Graph
            </Nav.Link>
            <Nav.Link eventKey={2} href="/login" >
              Review
            </Nav.Link>
            <Nav.Link eventKey={2} href="/adminchangepass" >
              Change Password
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Adminhome