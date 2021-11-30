import React, { Suspense, lazy } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

// import AppScreen from "../pages/AppScreen";
// import AuthRouter from "./AuthRouter";
// import PrivateRouter from "./PrivateRouter";
// import PublicRouter from "./PublicRouter";

import { login } from "../actions/auth";
import { firebase } from "../firebase/config-firebase";
import { loadData } from "../helpers/loadData";
import { leerRegistro } from "../actions/nomina";

const AppScreen = lazy(() => import("../pages/AppScreen"));
const AuthRouter = lazy(() => import("./AuthRouter"));
const PrivateRouter = lazy(() => import("./PrivateRouter"));
const PublicRouter = lazy(() => import("./PublicRouter"));

const AppRouter = () => {
  const dispatch = useDispatch();

  const [log, setLog] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(login(user.uid, user.displayName));
        setLog(true);

        const nominaData = await loadData(user.uid);

        dispatch(leerRegistro(nominaData));
      } else {
        setLog(false);
      }
    });
  }, [dispatch]);

  return (
    <Suspense
      fallback={
        <div className="center">
          <div className="preloader-wrapper small active">
            <div className="spinner-layer spinner-red-only">
              <div className="circle-clipper left">
                <div className="circle"></div>
              </div>
              <div className="gap-patch">
                <div className="circle"></div>
              </div>
              <div className="circle-clipper right">
                <div className="circle"></div>
              </div>
            </div>
          </div>{" "}
          <br />
          <strong>Loading...</strong>
        </div>
      }
    >
      <BrowserRouter>
        <Switch>
          <PublicRouter path="/auth" log={log} component={AuthRouter} />
          <PrivateRouter exact path="/" log={log} component={AppScreen} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
};

export default AppRouter;
