import React, { FC, useContext } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Context } from '../index'

interface IProps {}

/**
* @author
* @function @NavBar
**/

export const NavBar:FC<IProps> = (props) => {
    const { user } = useContext(Context)
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
   )
 }
