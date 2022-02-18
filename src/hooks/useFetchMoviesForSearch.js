import { useState, useEffect } from 'react';
import { fetchAllMovies } from '../services/api';

export const useFetchMoviesForSearch = () => {
 const [querys, setQuerys] = useState([]);
  useEffect(() => {
    const fetchQuerys = async () => {
      const results = await fetchAllMovies();
      setQuerys(results);
    };
    fetchQuerys();
  }, []);

  return querys;
};
