import React, { FC, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import TypesBar from '../components/TypesBar'
import TypesEdit from '../components/TypesEdit';

interface Props {}

/**
* @author VitalyKhe
* @function AdminPage
**/

const AdminPage:FC<Props> = (props) => {

  return (
    <Container>
      <Row>
          <TypesEdit/>
      </Row>
    </Container>
   )
 }

export default AdminPage
