import React, { FC} from 'react'
import { Container, Row } from 'react-bootstrap'
import BrandsAdmin from '../components/BrandsAdmin';
import TypesAdmin from '../components/TypesAdmin';

interface Props {}

/**
* @author VitalyKhe
* @function AdminPage
**/

const AdminPage:FC<Props> = (props) => {

  return (
    <Container>
      <Row>
          <TypesAdmin/>
        <BrandsAdmin/>
      </Row>
    </Container>
   )
 }

export default AdminPage
