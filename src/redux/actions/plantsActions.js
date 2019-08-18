export const fetchPlants = () => dispatch => {
  return fetch("http://localhost:4000/api/plants")
    .then(res => res.json())
    .then(data => dispatch({ type: "FETCH_PLANTS_DONE", data }))
}