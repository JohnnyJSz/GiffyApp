import { useEffect, useState } from "react";
import getTrendingSearchTerms from "services/getTrendingSearchTerms";
import Category from "components/category";

const TrendingSearches = () => {
  const [trends, setTrends] = useState([]);
  useEffect(() => {
    getTrendingSearchTerms().then(setTrends);
  }, []);
  return <Category name="Trending" options={trends} />;
};

export default TrendingSearches;
