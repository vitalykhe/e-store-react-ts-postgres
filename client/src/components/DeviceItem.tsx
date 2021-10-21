import { observer } from 'mobx-react-lite'
import React, { FC } from 'react'
interface Props { }

/**
* @author 
* @function DeviceItem
**/

const DeviceItem: FC<Props> =
  observer(
    (props) => {
      return (
        <div>DeviceItem</div>
      )
    }
  )

export default DeviceItem


