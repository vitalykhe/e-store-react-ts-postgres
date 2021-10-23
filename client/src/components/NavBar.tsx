import { observer } from "mobx-react-lite";
import React, { FC, useContext } from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Context } from "../index";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { useHistory } from "react-router-dom";

interface IProps {}

/**
 * @author
 * @function @NavBar
 **/

export const NavBar: FC<IProps> = observer((props) => {
  const { user } = useContext(Context);
  const history = useHistory();

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href={SHOP_ROUTE}>EcoLight</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <Nav.Link href="#pricing"></Nav.Link>
          {user?.getIsAuth() ? 
            <Button onClick={() => history.push(LOGIN_ROUTE)}>logout</Button>
            : 
            <Button onClick={() => history.push(LOGIN_ROUTE)}>login</Button>}
          &nbsp;
          {user?.getRole() === "ADMIN" && user?.getIsAuth() ? (
            <Button onClick={() => history.push(ADMIN_ROUTE)}>admin panel</Button>
          ) : (
            ""
          )}
        </Nav>
      </Container>
    </Navbar>
  );
});
