import React from "react";
import activityIndicator from "./NTLoading.gif";

export const ActivityIndicator = (props) => {
  const { isBusy } = props;
  return isBusy ? (
    <img src={activityIndicator} style={{ width: "60px" }} alt="" />
  ) : null;
};

export default ActivityIndicator;
