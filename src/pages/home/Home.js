import React, { useState } from "react";
import { Link } from "wouter";
import classes from "./Home.module.css";
import SearchForm from "../../components/searchForm/SearchForm";
import Gifs from "../../components/gifs/Gifs";
import { useEffect } from "react/cjs/react.development";

const SOUTH_AMERICA_GIFS = [
  "Venezuela",
  "Colombia",
  "Ecuador",
  "Peru",
  "Bolivia",
  "Brasil",
];

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
        <h3 className={classes.homeSubTitle}>South America Countries Gifs</h3>
        {SOUTH_AMERICA_GIFS.map((option) => (
          <Link to={`/search/${option}`} key={option}>
            {option} gifs
          </Link>
        ))}
      </div>
      <div className={classes.homeSection}>
        <h3 className={classes.homeSubTitle}>
          Latest search: "{latestSearchValue}"
        </h3>
        <Gifs keyword={latestSearchValue} />
      </div>
    </div>
  );
};

export default Home;
