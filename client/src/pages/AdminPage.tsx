import React, { FC, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import TypesBar from '../components/TypesBar'

interface Props {}

/**
* @author VitalyKhe
* @function AdminPage
**/

const AdminPage:FC<Props> = (props) => {

  const [addTypeShow, setTypeShow] = useState(false);
  const [addBrandShow, setBrandShow] = useState(false);
  const [addDeviceShow, setDeviceShow] = useState(false);

  return (
    <Container>
      <Row>
          <TypesBar editable={true}/>
      </Row>
    </Container>
   )
 }

export default AdminPage
