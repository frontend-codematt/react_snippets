import { useEffect, useState } from "react";

const useFetch = ({ url }) => {
    const [items, setItems] = useState(null);

    useEffect(() => {
        fetch(url)
            .then((result) => {
                return result.json();
            })
            .then((data) => {
                setItems(data);
            });
    }, [url]);

    return { items };
};

export default useFetch;
