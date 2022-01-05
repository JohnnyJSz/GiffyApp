import React from "react";
import { Link } from "wouter";

import classes from "./Category.module.css";

const Category = ({ name, options }) => {
  return (
    <div className={classes.categoryMain}>
      <h3 className={classes.categoryTitle}>{name}</h3>
      <div className={classes.categoryLinksContainer}>
        {options.map((option) => (
          <Link
            to={`/search/${option}`}
            key={option}
            className={classes.categoryLink}
          >
            {option}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
