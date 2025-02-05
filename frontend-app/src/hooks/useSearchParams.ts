import { useState, useEffect, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const useSearchParams = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useState(
    new URLSearchParams(location.search)
  );

  useEffect(() => {
    setSearchParams(new URLSearchParams(location.search));
  }, [location.search]);

  interface SearchParams {
    [key: string]: string | null | undefined;
  }

  const updateSearchParams = useCallback(
    (newParams: SearchParams) => {
      const updatedParams = new URLSearchParams(location.search);
      Object.keys(newParams).forEach((key) => {
        const value = newParams[key];
        if (value === null || value === undefined) {
          updatedParams.delete(key);
        } else {
          updatedParams.set(key, value);
        }
      });
      navigate(`${location.pathname}?${updatedParams.toString()}`, {
        replace: true,
      });
    },
    [location.search, navigate]
  );

  return [searchParams, updateSearchParams];
};

export default useSearchParams;
