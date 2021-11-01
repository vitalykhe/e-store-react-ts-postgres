import React, { FC, useContext, useEffect, useState } from "react";
import { ListGroup, Form } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { set } from "mobx";
import { Type } from "../utils/types";
import { fetchTypes } from "../http/deviceAPI";
import { observer } from "mobx-react-lite";
import { Context } from "..";

interface Props {
  editable: boolean;
}

/**
 * @author
 * @function TypesBar
 **/

const TypesBar: FC<Props> = observer((props) => {
  const { devices } = useContext(Context);

  const [deviceTypes, setDeviceTypes] = useState<Type[]>([]);
  useEffect(() => {
    fetchTypes().then((types) => {
      devices?.setTypes(types);
      setDeviceTypes(types);
    });
  }, []);

  function saveType(
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>,
    typeId: number
  ) {
    console.log(e.target.value);
  }

  function updateTypes(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    typeId: number
  ) {
    const updatedControls = deviceTypes.map((type) => {
      if (typeId !== type.id) 
        return type;
      else
        return { ...type, name: e.target.value }
    });
    setDeviceTypes(updatedControls)
    devices?.setTypes(updatedControls)
  }

  if (!props.editable)
    return (
      <ListGroup as="ul">
        {devices?.getTypes()?.map((type) => {
          const uniqueKey = uuidv4();
          return (
            <ListGroup.Item
              style={{ cursor: "pointer" }}
              key={uniqueKey}
              onClick={() => devices?.setSelectedType(type.id)}
              active={devices.getSelectedType() === type.id}
            >
              {type.name}
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    );
  else {
    return (
      <ListGroup as="ul">
        {deviceTypes.map((type) => {
          return (
            <ListGroup.Item key={type.id}>
              <Form.Control
                type="text"
                placeholder={type.name}
                onBlur={(e) => saveType(e, type.id)}
                value={type.name}
                onChange={(e) => updateTypes(e, type.id)}
              />
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    );
  }
});

export default TypesBar;
