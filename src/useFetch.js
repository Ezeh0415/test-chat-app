import { useEffect, useState } from "react";


    const useFetch = (url) => {

        const [data, setData] = useState(null)
        const [isPending, setIsPending] = useState(true);
        const [error, setError] = useState(null)
    
        useEffect(() => {
    
          const abortcont = new AbortController()
    
    
            setTimeout(() => {
              fetch(url,  { signal:abortcont.signal })
                .then(res => {
                  if (!res.ok) {
                       throw Error('poor network check your network and try again')
                  }
                return res.json()
                })
                .then(data => {
                setData(data);
                setIsPending(false);
                setError(null);
                })
                .catch(err => {
                  if (err.name === 'AbortError') {
                    console.log('fetch abort')
                  }else {
                    setIsPending(false);
                    setError(err.message);
                  }
                })
            }, 500)
    
            return () => abortcont.abort();
    
          }, [url]);
    
          return {data, isPending, error};
    }
    
    export default useFetch;