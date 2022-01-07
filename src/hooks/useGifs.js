import { useState, useEffect, useContext } from "react";
import getGifs from "services/getGifs";
import GifsContext from "context/GifsContext";

const INITIAL_PAGE = 0;

const useGifs = (keyword) => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingNextPage, setLoadingNextPage] = useState(false);
  const [page, setPage] = useState(INITIAL_PAGE);
  const { gifs, setGifs } = useContext(GifsContext);

  //! recuperamos la keyword del localStorage
  const keywordToUse =
    keyword || localStorage.getItem("lastKeyword") || "random";

  useEffect(() => {
    setIsLoading(true);

    getGifs({ keyword: keywordToUse }).then((gifs) => {
      setGifs(gifs);
      setIsLoading(false);
      //! guardamos la keyWord en el localStorage
      localStorage.setItem("lastKeyword", keyword);
    });
  }, [keywordToUse, keyword, setGifs]);

  useEffect(() => {
    if (page === INITIAL_PAGE) return;

    setLoadingNextPage(true);

    getGifs({ keyword: keywordToUse, page }).then((nextGifs) => {
      setGifs((prevGifs) => prevGifs.concat(nextGifs));
      setLoadingNextPage(false);
    });
  }, [keywordToUse, page, setGifs]);

  return { isLoading, gifs, loadingNextPage, setPage };
};

export default useGifs;
