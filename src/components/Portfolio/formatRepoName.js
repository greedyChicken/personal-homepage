const formatRepoName = (repoName) => {
  return repoName
    .split(/[-_]/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export default formatRepoName;
