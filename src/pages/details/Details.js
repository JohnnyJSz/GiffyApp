import React, { useContext } from "react";
import GifContext from "context/GifsContext";
import Gif from "components/gifs/gif";

import classes from "./Details.module.css";

const Details = ({ params }) => {
  const { gifs } = useContext(GifContext);
  console.log(gifs);
  const id = params.id;
  const gif = gifs.find((gif) => gif.id === id);

  console.log(gif);
  return (
    <div className={classes.detailsMainContainer}>
      <h2 className={classes.detailsTitle}>DETAILS PAGE</h2>
      <h4>Gif ID: {id}</h4>
      <Gif id={gif.id} url={gif.url} title={gif.title} />
    </div>
  );
};

export default Details;
