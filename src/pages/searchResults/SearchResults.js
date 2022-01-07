import React from "react";
import Gifs from "components/gifs";

import classes from "./SearchResults.module.css";

const SearchResults = ({ params }) => {
  const { keyword } = params;

  return (
    <div className={classes.searchResultsMainContainer}>
      <h2 className={classes.searchResultsTitle}>
        Results for "{decodeURI(keyword)}"
      </h2>
      <Gifs keyword={keyword} />
    </div>
  );
};

export default SearchResults;
