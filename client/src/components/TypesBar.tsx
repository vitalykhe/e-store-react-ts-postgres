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
  const { devices } = useContext(Context);
  return (
    <ListGroup as="ul">
      { devices?.getTypes()?.map((type) => {
        const uniqueKey = uuidv4()
        return (
          <ListGroup.Item
            style={{ cursor: 'pointer' }}
            key={uniqueKey}
            onClick={() => devices?.setSelectedTypes(type.id)}
            active={ devices.getSelectedTypes().indexOf(type.id) !== -1 }
          >
            {type.name}
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
});

export default TypesBar;