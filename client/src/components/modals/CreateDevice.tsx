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
  interface DeviceDescription {
    title: string;
    description: string;
    uk: number;
  }
  const { devices } = useContext(Context);
  const [deviceDescriptionTags, setDeviceDescriptionTags] = useState<
    DeviceDescription[]
  >([]);

  const addNewProp = () => {
    setDeviceDescriptionTags([
      ...deviceDescriptionTags,
      {
        title: "",
        description: "",
        uk: Date.now(),
      },
    ]);
  };

  const removeProp = (uk: number):void => {
    setDeviceDescriptionTags(deviceDescriptionTags.filter(tag => tag.uk !== uk));
  };

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
          {deviceDescriptionTags.map((tag) => (
            <Row key={tag.uk} className="m-3">
              <Col>
                <Form.Control placeholder={"title"} className="m-1" />
              </Col>
              <Col>
                <Form.Control placeholder={"description"} className="m-1" />
              </Col>
              <Col><Button variant={'warning'} onClick={() => removeProp(tag.uk)}>remove</Button></Col>
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
