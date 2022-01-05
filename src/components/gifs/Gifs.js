import useGifs from "hooks/useGifs";
import Gif from "components/gifs/gif";
import LoadingSpinner from "components/ui/loadingSpinner";
import NoItem from "components/ui/noItem";

import classes from "./Gifs.module.css";

const Gifs = ({ keyword }) => {
  const { isLoading, gifs } = useGifs(keyword);
  return (
    <div className={classes.gifsMainContainer}>
      {isLoading && <LoadingSpinner />}
      {!isLoading &&
        gifs.length > 0 &&
        gifs.map((gif) => (
          <Gif
            key={gif.id}
            id={gif.id}
            url={gif.url}
            title={gif.title}
          />
        ))}
      {!isLoading && gifs.length < 1 && <NoItem />}
    </div>
  );
};

export default Gifs;
