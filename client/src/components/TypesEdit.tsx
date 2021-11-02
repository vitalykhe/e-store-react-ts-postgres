import React, { FC, useEffect, useState } from "react";
import { ListGroup, Form, Button, Row, Col, Container } from "react-bootstrap";
import { Type } from "../utils/types";
import { fetchTypes, deleteType, createType, updateTypesArr } from "../http/deviceAPI";

interface Props {}

/**
 * @author
 * @function TypesAdmin
 **/

const TypesAdmin: FC<Props> = (props) => {
  
  const [deviceTypes, setDeviceTypes] = useState<Type[]>([])
  const [addNew, setAddNew] = useState(false)
  const [newTypeName, setNewTypeName] = useState('')
  const [changesSaved, setChangesSaved] = useState(true)

  useEffect(() => {
    fetchTypes().then((types) => {
      setDeviceTypes(types);
    });
  }, []);

  function saveType(
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>,
    typeId: number
  ) {
    
  }

  function updateTypes(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    typeId: number
  ) {
    const updatedControls = deviceTypes.map((type) => {
      if (typeId !== type.id) return type;
      else {
        return { ...type, name: e.target.value };
      }
    });
    setDeviceTypes(updatedControls);
    setChangesSaved(false)
  }

  const callDeleteType = (id: number) => {

    deleteType(id).then((res) => {
      setDeviceTypes(res);
    });
  };

  const addNewType = () => {
    if(addNew && newTypeName.length > 0) {
      createType({name: newTypeName}).then(() => {
        fetchTypes().then((res) => {
          // setChangesSaved(true)
          setDeviceTypes(res)
        })
      })
      setNewTypeName('')
      setAddNew(false)
    }
    else setAddNew(true)
  }

  const saveChanges = () => {
    updateTypesArr(deviceTypes).then(()=>{
      setChangesSaved(!changesSaved)
      fetchTypes().then((res) => {
        setDeviceTypes(res)
      })
    })
  }

  return (
    <Container>
      <Row>
        <Col>
          <h1>Edit types</h1>
        </Col>
      </Row>
      <ListGroup as="ul" style={{ width: 600 }}>
        {deviceTypes.map((type) => {
          return (
            <ListGroup.Item key={type.id}>
              <Row>
                <Col md={10}>
                  <Form.Control
                    type="text"
                    placeholder={type.name}
                    onBlur={(e) => saveType(e, type.id)}
                    value={type.name}
                    onChange={(e) => updateTypes(e, type.id)}
                  />
                </Col>
                <Col md={2}>
                  <Button onClick={() => callDeleteType(type.id)}>X</Button>
                </Col>
              </Row>
            </ListGroup.Item>
          );
        })}
        <ListGroup.Item>

        <Row>
            <Col md={10}>
                  { addNew ? 
                    <Form.Control
                      type="text"
                      value={newTypeName}
                      onChange={(e) => {setNewTypeName(e.target.value)}}
                      placeholder='Enter type name'
                    />
                  : ''
                  }
                </Col>
                <Col md={2}>
                  <Button onClick={() => addNewType()}>{!addNew? 'add': 'save'}</Button>
                </Col>
              </Row>
        </ListGroup.Item>
      </ListGroup>
      {!changesSaved ? <Button className="mt-2" onClick={() => saveChanges()}>Save changes</Button> : '' }
        
    </Container>
  );
};

export default TypesAdmin;
