import React from "react";
import { usePromiseTracker } from "react-promise-tracker";
import Loader from "react-loader-spinner";
import "./spinner.css";

export const Spinner = (props) => {
  // const { promiseInProgress } = usePromiseTracker();  //#fd7e14

  
  return (
    // promiseInProgress && (
      <div className="spinner">
        <Loader type="ThreeDots" color="#00BFFF" height="100" width="100" />
      </div>
    // )
  );
};

