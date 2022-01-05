import React, { useEffect, useState, useRef } from "react";
import getTrendingSearchTerms from "services/getTrendingSearchTerms";
import Category from "components/category";

const TrendingSearches = () => {
  const [trends, setTrends] = useState([]);
  useEffect(() => {
    getTrendingSearchTerms().then(setTrends);
  }, []);
  return <Category name="Trending" options={trends} />;
};

const LazyTrendingSearches = () => {
  const [show, setShow] = useState(false);
  const elementRef = useRef();

  useEffect(() => {
    const onChange = (entries) => {
      const element = entries[0];
      if (element.isIntersecting) {
        setShow(true);
      }
    };
    const observer = new IntersectionObserver(onChange, {
      rootMargin: "100px",
    });

    observer.observe(document.getElementById("lazyTrendigns"));
  });
  return <div id="lazyTrendigns">{show && <TrendingSearches />}</div>;
};

export default LazyTrendingSearches;
