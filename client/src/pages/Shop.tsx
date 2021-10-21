import React, { FC } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import BrandsBar from '../components/BrandsBar'
import DevicesList from '../components/DevicesList'
import TypesBar from '../components/TypesBar'

interface IProps {}

/**
* @author
* @function @Shop
**/

export const Shop:FC<IProps> = (props) => {
  return (
    <Container>
      <Row>
        <Col md={3} className="mt-2">
          <TypesBar/>
        </Col>
        <Col md={9}>
          <BrandsBar/>
          <DevicesList/>
        </Col>
      </Row>
    </Container>
   )
 }
