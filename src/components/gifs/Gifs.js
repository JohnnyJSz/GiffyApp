import useGifs from "hooks/useGifs";
import Gif from "components/gifs/gif";
import LoadingSpinner from "components/ui/loadingSpinner";
import NoItem from "components/ui/noItem";

import classes from "./Gifs.module.css";
import React from "react";

const Gifs = ({ keyword }) => {
  const { isLoading, gifs, setPage } = useGifs(keyword);

  const nextPageHandler = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <React.Fragment>
      {isLoading && <LoadingSpinner />}
      <div className={classes.gifsMainContainer}>
        <div className={classes.gifsContainer}>
          {!isLoading &&
            gifs.length > 0 &&
            gifs.map((gif) => (
              <Gif key={gif.id} id={gif.id} url={gif.url} title={gif.title} />
            ))}
        </div>
        <div className={classes.buttonContainer}>
          <button onClick={nextPageHandler} className={classes.buttonNextPage}>
            More gifs
          </button>
        </div>
      </div>
      {!isLoading && gifs.length < 1 && <NoItem />}
    </React.Fragment>
  );
};

export default Gifs;
