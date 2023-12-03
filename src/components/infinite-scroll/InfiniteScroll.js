import { useCallback, useRef } from "react";
import AllMovieCard from "../all-movie-card/AllMovieCard";

function InfiniteScroll({ data, hasMore, setPageNumber }) {
  const observer = useRef();
  const lastItemElement = useCallback(
    (node) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setTimeout(
            () => setPageNumber((prevPageNumber) => prevPageNumber + 1),
            1000
          );
        }
      });
      if (node) observer.current.observe(node);
    },
    [hasMore, setPageNumber]
  );

  return (
    <>
      {data.map((movie, index) => {
        if (data.length === index + 1) {
          return (
            <AllMovieCard
              reference={lastItemElement}
              data={movie}
              key={index}
            />
          );
        } else {
          return <AllMovieCard data={movie} key={index} />;
        }
      })}
    </>
  );
}

export default InfiniteScroll;
