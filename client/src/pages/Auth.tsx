import React, { FC } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";

interface IProps { }

/**
 * @author
 * @function @Auth
 **/

export const Auth: FC<IProps> = (props) => {
  const location = useLocation()
  const isLogin = location.pathname === LOGIN_ROUTE ? true : false
  return (
    <Container className="d-flex justify-content-center flex-center">
      <Card
        style={{ width: 600 }}
        className="p-5 mt-5"
      >
        <h2>{isLogin ? 'Authorization' : 'Sign up'}</h2>
        <Form className="d-flex flex-column">
          <Form.Control className="mt-3" placeholder="Enter your email" />
          <Form.Control className="mt-3" placeholder={isLogin ? "Enter your password" : "Create a password"} />
          {isLogin ?
            <div className="p-1 mt-2">Dont't have an account? <NavLink to={REGISTRATION_ROUTE}>Create account</NavLink></div> 
            :
            <div className="p-1 mt-2">Already have account? <NavLink to={LOGIN_ROUTE}>Login</NavLink></div> 
            }
          <Button className="mt-3 align-self-end">{isLogin ? 'Login' : 'Sign up'}</Button>
        </Form>
      </Card>
    </Container>
  );
};
