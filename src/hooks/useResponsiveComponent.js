import { useEffect, useState } from 'react';

export const useResponsiveComponent = () => {

  const [query, setQuery] = useState(0);

  useEffect(() => {
      const q = window.innerWidth || 0;
      setQuery(q)
      console.log(q)
  }, [query]);
  return query;
};
