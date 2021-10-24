import React, { FC, useContext } from "react";
import { Button, Dropdown, Form } from "react-bootstrap";
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
  const { devices } = useContext(Context);

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add new device
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control placeholder={"Enter device name"} />
          <Dropdown>
            <Dropdown.Toggle>Choose type</Dropdown.Toggle>
            <Dropdown.Menu>
              {devices?.getTypes()?.map(type => type)}
            </Dropdown.Menu>
          </Dropdown>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant={"outline"} onClick={() => {}}>
          Add
        </Button>
        <Button variant={"outline"} onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
