import React from "react";
import Hourglass from "images/loadingSpinner/hourglass.svg";

import classes from "./LoadingSpinner.module.css";

const LoadingSpinner = () => {
  return (
    <div className={classes.spinnerContainer}>
      <div className={classes.spinnerOuter}>
        <div className={classes.spinnerInner}>
          <div className={classes.bouncingDot}>
            <img src={Hourglass} className={classes.item} alt="hourglass" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
