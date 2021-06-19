export const fetchQuizFromApi = () => {
  const apiurl = "https://opentdb.com/api.php?amount=10&type=boolean";

  return fetch(apiurl)
    .then((res) => res.json())
    .then((question) => question.results)
    .catch((err) => Promise.reject(err));
};
