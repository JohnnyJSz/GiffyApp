import React from "react";
import Gifs from "../../components/gifs/Gifs";
import classes from "./SearchResults.module.css";

const SearchResults = ({ params }) => {
  const { keyword } = params;
  console.log(keyword);
  return (
    <div className={classes.searchResultsMainContainer}>
      <h2 className={classes.searchResultsTitle}>Results for "{keyword}"</h2>
      <Gifs keyword={keyword} />
    </div>
  );
};

export default SearchResults;