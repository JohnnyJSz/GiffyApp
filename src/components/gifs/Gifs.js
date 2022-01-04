import useGifs from "../../hooks/useGifs";
import Gif from "./gif/Gif";
import LoadingSpinner from "../ui/loadingSpinner/LoadingSpinner";
import classes from "./Gifs.module.css";
import NoItem from "../ui/noItem/NoItem";

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
            gif={gif.images.original.url}
            title={gif.title}
          />
        ))}
      {!isLoading && gifs.length < 1 && <NoItem />}
    </div>
  );
};

export default Gifs;
