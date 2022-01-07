import React, { Suspense } from "react";
import useNearScreen from "hooks/useNearScreen";
import LoadingSpinner from "components/ui/loadingSpinner";
const TrendingSearches = React.lazy(() => import("./TrendingSearches"));

const LazyTrendingSearches = () => {
  const { isNearScreen, fromRef } = useNearScreen({ distanceToShow: "200px" });

  return (
    <div ref={fromRef}>
      <Suspense fallback={<LoadingSpinner />}>
        {isNearScreen && <TrendingSearches />}
      </Suspense>
    </div>
  );
};

export default LazyTrendingSearches;
