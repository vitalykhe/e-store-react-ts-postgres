import { observer } from 'mobx-react-lite'
import React, { FC, useContext } from 'react'
import { Row, Card, Col } from 'react-bootstrap'
import { Context } from '../index'
import { v4 as uuidv4 } from 'uuid';

interface Props { }

/**
* @author 
* @function BrandsBar
**/

const BrandsBar: FC<Props> = observer((props) => {
  const { devices } = useContext(Context)
  return (
    <Row className="d-flex justify-content-start">
      {devices?.getBrands()?.map(brand => {
        const uk = uuidv4()
        return (
          <Col>
            <Card key={uk} className="p-1 mt-2 align-items-center"
              onClick={()=>devices.setSelectedBrand(brand)}
              border={brand.id === devices.getSelectedBrand()?.id ? 'primary': 'light'}
              style={{cursor: 'pointer'}}
            >
              {brand.name}
            </Card>
          </Col>)
      })}
    </Row>
  )
})


export default BrandsBar
