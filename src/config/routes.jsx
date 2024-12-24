import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { WorkOrders } from "../components";
//import MapComponent from "../components/MapComponent";
import MapComponent from "../components/Mapa";

import { Arkod } from "../componentsWeb";

import { FieldsListView } from "../features/oliveFields";
import { UserListScreen } from "../components/jurina/UserListScreen";


export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/olives" />} />

      <Route path="/olives" component={WorkOrders} />
      <Route path="/mapa" component={MapComponent} />

      <Route path="/fieldlistview" component={FieldsListView} />
      <Route path="/jure" component={UserListScreen} />

      <Route path="/arkod" component={Arkod} />     
    </Switch>
  );
};
