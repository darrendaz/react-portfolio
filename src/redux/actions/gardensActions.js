export function fetchGardens() {
  return (dispatch) => {
    dispatch({ type: "LOADING_GARDENS" })
    return fetch("http://localhost:4000/api/gardens")
      .then(res => res.json())
      .then(data => dispatch({ type: "FETCH_GARDENS", gardens: data }))
  }
}