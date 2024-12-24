import React, { useEffect } from "react";

import { Route, useNavigate } from "react-router-dom";
import { useAppServices } from "./appServices";

export const PrivateRoute = (props) => {
  const navigate = useNavigate();
  const appServices = useAppServices();
  const { element: Component, ...rest } = props;
  const isAuthenticated = appServices.isAuthenticated();
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/lifely/login");
    }
  }, [isAuthenticated, navigate]);

  return <Route {...rest} element={Component} />;
};
