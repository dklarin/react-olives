import React, { useContext } from "react";

export const AppServicesContext = React.createContext({});

export const useAppServices = () => {
  const ctx = useContext(AppServicesContext);
  return ctx;
};
