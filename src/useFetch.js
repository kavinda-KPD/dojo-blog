import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [data, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    fetch(url, { signal: abortCont.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error('could not fetch the data for that resource');
        }
        console.log(res);
        return res.json();
      })
      .then((data) => {
        setIsPending(false);
        setBlogs(data);
        setError(null);
      })
      .catch((err) => {
        // auto catches network / connection error

        if (err.name === 'AbortError') {
          console.log('fetch aborted');
        } else {
          setIsPending(false);
          setError(err.message);
        }
      });

    return () => abortCont.abort();
    // setTimeout(() => {

    // }, 1000);
  }, [url]);
  return { data, isPending, error };
};

export default useFetch;
