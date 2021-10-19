import React, { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./components/AppRouter";
interface IProps {}

/**
 * @author
 * @function @App
 **/

const App: FC<IProps> = (props) => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;