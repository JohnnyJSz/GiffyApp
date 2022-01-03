import React from "react";
import { Link } from "wouter";
import classes from "./Home.module.css";
import SearchForm from "../../components/searchForm/SearchForm";

const SOUTH_AMERICA_GIFS = [
  "Venezuela",
  "Colombia",
  "Ecuador",
  "Peru",
  "Bolivia",
  "Brasil",
];

const Home = () => {
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
    </div>
  );
};

export default Home;
