import React from "react";
import { Link } from "wouter";

import classes from "./Gif.module.css";

const Gif = ({ id, url, title }) => {
  return (
    <div className={classes.gifContainer}>
      <Link to={`/gif/${id}`} className={classes.link}>
        <img
          src={url}
          className={classes.gifImage}
          alt={title ? title : "unknown"}
        />
        <small className={classes.gifTitle}>{title ? title : "unknown"}</small>
      </Link>
    </div>
  );
};

export default Gif;
