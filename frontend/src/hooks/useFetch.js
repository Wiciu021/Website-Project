import { useEffect, useState } from "react";

export function useFetch(url, config = {}) {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {

    const getData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(url, config);
        if (!response.ok) {
          throw new Error(`error: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setErrorMsg(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    getData();

  }, [url, config])

  return { data, errorMsg, isLoading };
}