import {useState, useEffect} from "react";
import instance from "../services/axios";
import requests from "../services/requests";

  export const useFetchGenreMovies = () => {

    const [currentGenres, setGenres] = useState([]);

    useEffect(()=>{
        (async ()=>{
            const datas = await instance(`${requests.fetchGenres}`)
            const result = datas.data;
            const {genres} = result;
       
            setGenres(genres)
        
        })()
    }, [])
    return currentGenres;
}
