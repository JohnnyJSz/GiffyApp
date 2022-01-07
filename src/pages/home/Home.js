import React, { useState, useEffect } from "react";
import SearchForm from "components/searchForm";
import Gifs from "components/gifs";
import LazyTrendingSearches from "components/trendingSearches/LazyTrendingSearches";

import classes from "./Home.module.css";

const Home = () => {
  const [latestSearchValue, setLatestSearchValue] = useState();
  useEffect(() => {
    setLatestSearchValue(localStorage.getItem("lastKeyword"));
  }, []);
  return (
    <div className={classes.homeMainContainer}>
      <h2 className={classes.homeTitle}>HOME PAGE</h2>
      <div className={classes.homeSection}>
        <h3 className={classes.homeSubTitle}>Search for more gifs</h3>
        <SearchForm />
      </div>
      <div className={classes.homeSection}>
        <h3 className={classes.homeSubTitle}>
          Latest search: "{decodeURI(latestSearchValue)}"
        </h3>
        <Gifs keyword={latestSearchValue} />
      </div>
      <LazyTrendingSearches />
    </div>
  );
};

export default Home;
