import { observer } from 'mobx-react-lite'
import React, { FC, useContext } from 'react'
import { Container, Nav, Navbar, Button } from 'react-bootstrap'
import { Context } from '../index'
import { SHOP_ROUTE } from '../utils/consts'

interface IProps { }

/**
* @author
* @function @NavBar
**/

export const NavBar: FC<IProps> = observer((props) => {
  const { user } = useContext(Context)

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href={SHOP_ROUTE}>EcoLight</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <Nav.Link href="#pricing"></Nav.Link>
          {user?.getIsAuth() ? <Button>logout</Button> : <Button>login</Button>}
          &nbsp;
          {user?.getRole() === 'ADMIN' && user?.getIsAuth() ? <Button>admin panel</Button> : ''}
        </Nav>
      </Container>
    </Navbar>
  )
})
