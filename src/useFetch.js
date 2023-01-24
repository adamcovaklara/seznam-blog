import { useEffect, useState } from "react";

const useFetch = (url, name, data, setData) => {
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => { 
        const abortCont = new AbortController();
        console.log('use effect ran :O');
        console.log('name is: ' + name)
        setTimeout(() => {
          fetch(url, { signal: abortCont.signal })
            .then(res => {
              if(!res.ok){
                console.log(res)
                throw Error('could not fetch the data for that resource')
              }
              return res.json();
            })
            .then((data) => {
              console.log(data)
              setData(data)
              setIsPending(false)
              setError(null)
            })
            .catch((err) => {
              if (err.name === "AbortError"){
                console.log("fetch aborted")
              } else {
                console.log(err.message)
                setIsPending(false)
                setError(err.message)
              }
            })
        }, 1000);
        return () => abortCont.abort();
      }, [url, name]);

      return { error, isPending, data, name }
}

export default useFetch;
