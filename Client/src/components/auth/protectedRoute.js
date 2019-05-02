import React from "react";
import { Redirect, Route, withRouter } from "react-router-dom";
import { Consumer } from "./../context";
import { toast } from "react-toastify";

import Auth from "./index";

const ProtectedRoute = props => {
  const { authenticated } = Auth.isAuthenticated();
  const { component: Component, exact, path, ...rest } = props;
  if (authenticated)
    return (
      <Route exact={exact} path={path} render={() => <Component {...rest} />} />
    );
  toast.error("Access is denied. User is unauthorized");
  return (
    <Redirect
      to={{
        pathname: "/login",
        state: { from: props.location.pathname }
      }}
    />
  );
};

export default withRouter(ProtectedRoute);
