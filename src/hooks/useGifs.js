import { useState, useEffect, useContext } from "react";
import getGifs from "../services/getGifs";
import GifsContext from "../context/GifsContext";

const useGifs = (keyword) => {
  const [isLoading, setIsLoading] = useState(false);
  // const [gifs, setGifs] = useState([]);
  const { gifs, setGifs } = useContext(GifsContext);

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
  }, [keyword, setGifs]);

  return { isLoading, gifs };
};

export default useGifs;
