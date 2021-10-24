import React, { FC, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { CreateBrand } from "../components/modals/CreateBrand";
import { CreateDevice } from "../components/modals/CreateDevice";
import { CreateType } from "../components/modals/CreateType";

interface IProps {}

/**
 * @author
 * @function @Admin
 **/

export const Admin: FC<IProps> = (props) => {
  const [addTypeShow, setTypeShow] = useState(false);
  const [addBrandShow, setBrandShow] = useState(false);
  const [addDeviceShow, setDeviceShow] = useState(false);

  return (
    <>
      <Container fluid="sm">
        <Row className="justify-content-md-center mt-5">
          <Col xs lg="2">
            <Button onClick={() => setTypeShow(true)}>
              Create device type
            </Button>
          </Col>
          <Col xs lg="2">
            <Button onClick={() => setBrandShow(true)}>Create device brand</Button>
          </Col>
          <Col xs lg="2">
            <Button onClick={() => setDeviceShow(true)}>Create device</Button>
          </Col>
        </Row>
      </Container>
      <CreateType show={addTypeShow} onHide={() => setTypeShow(false)} />
      <CreateBrand show={addBrandShow} onHide={() => setBrandShow(false)} />
      <CreateDevice show={addDeviceShow} onHide={() => setDeviceShow(false)} />
    </>
  );
};
