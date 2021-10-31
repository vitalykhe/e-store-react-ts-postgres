import React, { FC, useContext, useState } from "react";
import { Button, Col, Dropdown, Form, Row } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { Context } from "../../index";

interface IProps {
  show: boolean;
  onHide: () => void;
}

/**
 * @author
 * @function @CreateDevice
 **/

export const CreateDevice: FC<IProps> = ({ show, onHide }) => {
  interface DeviceProperty {
    propertyTitle: string;
    propertyDescription: string;
    uniqueKey: number;
  }
  const { devices } = useContext(Context);
  const [deviceProperties, setDeviceProperties] = useState<
    DeviceProperty[]
  >([]);

  const addNewProp = () => {
    setDeviceProperties([
      ...deviceProperties,
      {
        propertyTitle: "",
        propertyDescription: "",
        uniqueKey: Date.now(),
      },
    ]);
  };

  const removeProp = (uniqueKey: number):void => {
    setDeviceProperties(deviceProperties.filter(property => property.uniqueKey !== uniqueKey));
  };

  const addDevice = () => {
    const formData = new FormData()
    formData.append('title', '')
    formData.append('price', '')
    formData.append('img_url', '')
    formData.append('brand', '')
    formData.append('type', '')
    formData.append('device_properties', '')
  }

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add new device
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className="m-1">
            <Dropdown.Toggle>Choose type</Dropdown.Toggle>
            <Dropdown.Menu>
              {devices?.getTypes()?.map((type) => (
                <Dropdown.Item key={type.id}> {type.name} </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="m-1">
            <Dropdown.Toggle>Choose brand</Dropdown.Toggle>
            <Dropdown.Menu>
              {devices?.getBrands()?.map((brand) => (
                <Dropdown.Item key={brand.id}> {brand.name} </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          <Form.Control placeholder={"Device name"} className="m-1" />
          <Form.Control
            placeholder={"Device price"}
            type={"number"}
            className="m-1"
          />

          <Form.Control
            placeholder={"Choose file"}
            type={"file"}
            className="m-1"
          />
          <hr />
          {deviceProperties.map((property) => (
            <Row key={property.uniqueKey} className="m-3">
              <Col>
                <Form.Control placeholder={"title"} className="m-1" />
              </Col>
              <Col>
                <Form.Control placeholder={"description"} className="m-1" />
              </Col>
              <Col><Button variant={'warning'} onClick={() => removeProp(property.uniqueKey)}>remove</Button></Col>
            </Row>
          ))}
          <Button variant={"outline"} onClick={addNewProp}>
            Create new property
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant={"outline"} onClick={() => {}}>
          Submit
        </Button>
        <Button variant={"outline"} onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
