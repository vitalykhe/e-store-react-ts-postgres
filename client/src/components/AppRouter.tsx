import React, { FC } from 'react'
import { Switch, Router, Redirect, BrowserRouter } from 'react-router-dom'
interface IProps {}

/**
* @author
* @function @AppRouter
**/

export const AppRouter:FC<IProps> = (props) => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
   )
 }
