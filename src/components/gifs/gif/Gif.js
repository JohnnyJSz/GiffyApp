import React from "react";
import classes from "./Gif.module.css";

const Gif = ({ gif, title }) => {
  return (
    <div className={classes.gifContainer}>
      <img
        src={gif}
        className={classes.gifImage}
        alt={title ? title : "unknown"}
      />
      <h5 className={classes.gifTitle}>{title ? title : "unknown"}</h5>
    </div>
  );
};

export default Gif;
