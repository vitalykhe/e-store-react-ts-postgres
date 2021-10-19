import React, { FC, useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Context } from "../index";
import { authRoutes, publicRoutes } from "../routes";
import { SHOP_ROUTE } from "../utils/consts";
interface IProps {}

/**
 * @author
 * @function @AppRouter
 **/

export const AppRouter: FC<IProps> = (props) => {
  const {user} = useContext(Context)
  return (
    <Switch>
      {user?.getIsAuth &&
        authRoutes.map(({ path, component }) => {
          return <Route path={path} component={component} exact />;
        })}
      {publicRoutes.map(({ path, component }) => {
        return <Route path={path} component={component} exact />;
      })}
      <Redirect to={SHOP_ROUTE}/>
    </Switch>
  );
};
