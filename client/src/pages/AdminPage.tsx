import React, { FC} from 'react'
import { Container, Row } from 'react-bootstrap'
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
