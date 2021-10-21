import React, { FC } from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Device } from "../utils/types";
import { Star } from "react-bootstrap-icons";
import { useHistory } from "react-router-dom";
import { DEVICE_ROUTE } from "../utils/consts";

interface Props {
  device: Device;
}

/**
 * @author
 * @function DeviceItem
 **/

const DeviceItem: FC<Props> = ({ device }) => {
  const history = useHistory();
  return (
    <Col md={3} onClick={() => history.push(DEVICE_ROUTE + "/" + device.id)}>
      <Card style={{ width: "11rem", height: "16rem" }}>
        <Card.Img variant="top" src={device.img_url} width={120} height={120} />
        <Card.Body>
          <Card.Title>{device.name}</Card.Title>
          {/* <Card.Text>
              {device.description}
            </Card.Text> */}
          <div className="mb-2">
            <Star color={"red"} /> Rating: {device.rating}
          </div>
          <Button variant="primary">Add to cart</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default DeviceItem;
