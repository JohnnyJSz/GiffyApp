import React, { useState } from "react";
import { useLocation } from "wouter";
import Search from "images/search/search.svg";

import classes from "./SearchForm.module.css";

const SearchForm = () => {
  const [keyword, setKeyword] = useState("");
  const [, toLocation] = useLocation();

  const submitHandler = (event) => {
    event.preventDefault();
    toLocation(`/search/${keyword}`);
  };

  const inputChangeHandler = (event) => {
    setKeyword(event.target.value);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <input
        type="text"
        name="search"
        id="search-input"
        value={keyword}
        onChange={inputChangeHandler}
        className={classes.formInput}
        placeholder="Search..."
      />
      <button className={classes.button}>
        <img src={Search} alt="Search" />
      </button>
    </form>
  );
};

export default SearchForm;
