import React from "react";
import { Link } from "wouter";
import classes from "./Gif.module.css";

const Gif = ({ id, gif, title }) => {
  return (
    <div className={classes.gifContainer}>
      <Link to={`/gif/${id}`}>
        <img
          src={gif}
          className={classes.gifImage}
          alt={title ? title : "unknown"}
        />
        <h5 className={classes.gifTitle}>{title ? title : "unknown"}</h5>
      </Link>
    </div>
  );
};

export default Gif;
