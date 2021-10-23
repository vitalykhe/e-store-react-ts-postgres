import React, { FC } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

interface IProps {}

/**
 * @author
 * @function @Admin
 **/

export const Admin: FC<IProps> = (props) => {
  const vertticalMiddle = window.innerHeight / 2 - 100;
  return (
    <Container fluid="sm">
      <Row className="justify-content-md-center mt-5">
        <Col xs lg="2">
          <Button>Create device type</Button>
        </Col>
        <Col xs lg="2">
          <Button>Create device brand</Button>
        </Col>
        <Col xs lg="2">
          <Button>Create device</Button>
        </Col>
      </Row>
    </Container>
  );
};
