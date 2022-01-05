import NoSearch from "images/search/search_fail.svg";

import classes from "./NoItem.module.css";

const NoItem = () => {
  return (
    <div className={classes.noItemMainContainer}>
      <img
        src={NoSearch}
        alt="Not found item"
        className={classes.noItemImage}
      />
      <h2>No items found</h2>
    </div>
  );
};

export default NoItem;
