import React, { FC } from "react";
import { Button, Card, Container,} from "react-bootstrap";
import { Star } from "react-bootstrap-icons";

interface IProps {
}

/**
 * @author
 * @function @DevicePage
 **/

export const DevicePage: FC<IProps> = () => {
const device = {
  id: 1,
  name: "First Device",
  img_url: "e23d43ad-4d09-4862-b910-ceb222e01775.jpg",
  description:
    "Double layer rolled copper FPC. High light efficacy 150LM/W",
  price: 2,
  rating: 4.2,
}
  
  return (
    <Container>
      <Card className="m-3">
        <Card.Img variant="top" src={device.img_url} width={120} height={120} />
        <Card.Body>
          <Card.Title>{device.name}</Card.Title>
          <Card.Text>
              {device.description}
            </Card.Text>
          <div className="mb-4">
            <Star color={"red"} /> Rating: {device.rating}
          </div>
          <Card.Title>Price: {device.price}$</Card.Title>
          <Button variant="primary">Add to cart</Button>
        </Card.Body>
      </Card>
    </Container>
  );
};
