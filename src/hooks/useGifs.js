import { useState, useEffect } from "react";
import getGifs from "../services/getGifs";

const useGifs = (keyword) => {
  const [isLoading, setIsLoading] = useState(false);
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getGifs(keyword, 10).then((gifs) => {
      setGifs(gifs);
      setIsLoading(false);
    });
  }, [keyword]);

  return { isLoading, gifs };
};

export default useGifs;
