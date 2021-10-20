import React, { FC, useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "..";
import { ListGroup } from "react-bootstrap";
import { v4 as uuidv4 } from 'uuid';

interface Props { }

/**
 * @author
 * @function TypesBar
 **/

const TypesBar: FC<Props> = observer((props) => {
  const device = useContext(Context);
  return (
    <ListGroup as="ul">
      {device?.devices?.getTypes()?.map((type) => {
        const uniqueKey = uuidv4()
        return (
          <ListGroup.Item 
            style={{cursor: 'pointer'}}
            key={uniqueKey}
            onClick={()=>device?.devices?.setSelectedType(type)}
            active={type.id === device?.devices?.getSelectedType()?.id}
          >
            {type.name}
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
});

export default TypesBar;
