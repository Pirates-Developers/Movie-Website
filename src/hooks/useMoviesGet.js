import { useEffect, useState } from "react";
import axios from "axios";

function useMoviesGet(api, pageNumber) {
  const [movies, setMovies] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setMovies([]);
  }, [api]);

  useEffect(() => {
    let cancel;
    axios(`${api}&page=${pageNumber}`, {
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        setMovies((prev) => [...prev, ...res.data.results]);
        setHasMore(res.data.results.length > 0);
      })
      .catch((e) => console.log(e));

    return () => cancel();
  }, [api, pageNumber]);
  return { movies, hasMore };
}

export default useMoviesGet;
