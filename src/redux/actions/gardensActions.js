export const fetchGardens = () => dispatch => {
  return fetch("http://localhost:4000/api/gardens")
    .then(res => res.json())
    .then(data => dispatch({ type: "FETCH_GARDENS_DONE", data }))
}