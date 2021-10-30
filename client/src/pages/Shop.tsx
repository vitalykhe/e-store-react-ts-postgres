import { observer } from 'mobx-react-lite'
import React, { FC, useContext, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Context } from '..'
import BrandsBar from '../components/BrandsBar'
import DevicesList from '../components/DevicesList'
import TypesBar from '../components/TypesBar'
import { fetchBrands, fetchDevices, fetchTypes } from '../http/deviceAPI'

interface IProps {}

/**
* @author
* @function @Shop
**/

export const Shop:FC<IProps> = observer( (props) => {
  const { devices } = useContext(Context)

  useEffect(() => {
    fetchTypes().then(types => devices?.setTypes(types))
    fetchBrands().then(brands => devices?.setBrands(brands))
    fetchDevices().then(device => devices?.setDevices(device))
  })

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
 })
