import { useState, useEffect } from "react";

function PokemonList() {
    const url = "https://pokeapi.co/api/v2/pokemon/?limit=1025";
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchInfo = async () => {
            try {
                const res = await fetch(url);
                const d = await res.json();
                setData(d.results);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchInfo();
    }, []);

    return data;
}

export default PokemonList;