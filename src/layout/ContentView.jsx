import * as React from "react";
import { Routes } from "../config/routes";
import { withRouter } from "react-router-dom";
import { Sidebar } from "./Sidebar";

export const ContentView = withRouter(({ location }) => {
  return (
    <div>
      <Sidebar />
      <Routes />
      
    </div>
  );
});
