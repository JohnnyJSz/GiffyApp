import { useState, useEffect } from "react";
import getGifs from "../services/getGifs";

const useGifs = (keyword) => {
  const [isLoading, setIsLoading] = useState(false);
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    //! recuperamos la keyword del localStorage
    const keywordToUse =
      keyword || localStorage.getItem("lastKeyword") || "random";

    getGifs(keywordToUse, 10).then((gifs) => {
      setGifs(gifs);
      setIsLoading(false);
      //! guardamos la keyWord en el localStorage
      localStorage.setItem("lastKeyword", keyword);
    });
  }, [keyword]);

  return { isLoading, gifs };
};

export default useGifs;
