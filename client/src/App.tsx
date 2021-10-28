import { observer } from "mobx-react-lite";
import React, { FC, useContext, useEffect, useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";
import { Context } from ".";
import { AppRouter } from "./components/AppRouter";
import { NavBar } from "./components/NavBar";
import { check } from "./http/userApi";
interface IProps {}

/**
 * @author
 * @function @App
 **/

const App: FC<IProps> = observer((props) => {
  const { user } = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('before check :' + loading)
      check()
        .then((tokenBody) => {
          user?.setUser(tokenBody);
          console.log(user)
          user?.setIsAuth(true);
          console.log('Loading then:' + loading)
        })
        .finally(() => { 
          setLoading(false)
          console.log('Loading :' + loading)
        });
  }, []);

  // if (loading)
  //   return (
  //     <Button variant="primary" disabled>
  //       <Spinner
  //         as="span"
  //         animation="grow"
  //         size="sm"
  //         role="status"
  //         aria-hidden="true"
  //       />
  //       Loading...
  //     </Button>
  //   );

  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
});

export default App;
