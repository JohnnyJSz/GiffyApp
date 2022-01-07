import React from "react";
import classes from "./LoadingSpinner.module.css";

const LoadingSpinner = () => {
  return (
    <div className={classes.spinnerContainer}>
      <div className={classes.spinnerOuter}>
        <div className={classes.spinnerInner}>
          <div className={classes.bouncingDot}>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
