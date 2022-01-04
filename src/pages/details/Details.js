import React, { useContext } from "react";
import StaticContext from "../../context/StaticContext";

import classes from "./Details.module.css";

const Details = ({ params }) => {
  const context = useContext(StaticContext);
  console.log(context);
  const id = params.id;
  return (
    <div className={classes.detailsMainContainer}>
      <h2 className={classes.detailsTitle}>DETAILS PAGE</h2>
      <h4>Gif ID: {id}</h4>
      <div>
        <p>
          Name: <b>{context.name}</b>
        </p>
        <p>
          Is programmer: <b>{context.isProgrammer ? "Yes" : "No"}</b>
        </p>
      </div>
    </div>
  );
};

export default Details;
