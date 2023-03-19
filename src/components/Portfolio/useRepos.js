import { useEffect, useState } from "react";
import axios from "axios";

const useRepos = () => {
  const [repos, setRepos] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/greedyChicken/repos`)
      .then((response) => {
        setRepos(response.data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  return { repos, loading };
};

export default useRepos;
