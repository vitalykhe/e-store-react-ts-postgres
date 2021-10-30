import React, { FC, useEffect, useState } from "react";
import { Button, Card, Container,} from "react-bootstrap";
import { Star } from "react-bootstrap-icons";
import { useParams } from 'react-router-dom'
import { fetchDevice } from "../http/deviceAPI";
import { Device } from "../utils/types";

interface IProps {
}

/**
 * @author
 * @function @DevicePage
 **/

export const DevicePage: FC<IProps> = () => {

const [device, setDevice] = useState<Device>()

type Params = {
  id: string;
}

const { id } = useParams<Params>()

useEffect(() => {
  fetchDevice(parseInt(id)).then((data) => {
    setDevice(data as Device)
  })
})
  return (
    <Container>
      <Card className="m-3">
        <Card.Img variant="top" src={process.env.REACT_APP_SERVER_API_URL + "/" + device?.img_url} width={120} height={120} />
        <Card.Body>
          <Card.Title>{device?.name}</Card.Title>
          <Card.Text>
              {device?.description}
            </Card.Text>
          <div className="mb-4">
            <Star color={"red"} /> Rating: {device?.rating}
          </div>
          <Card.Title>Price: {device?.price}$</Card.Title>
          <Button variant="primary">Add to cart</Button>
        </Card.Body>
      </Card>
    </Container>
  );
};
