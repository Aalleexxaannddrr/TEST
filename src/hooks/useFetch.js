import {useEffect, useState} from "react";

function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    setData(result)
                    setLoading(false)
                },
                (error) => {
                    setError(error)
                    setLoading(false)
                }
            )
            }, [url])

    return {data, loading, error}
}

export default useFetch