export const fetchGardens = () => dispatch => {
  return fetch("http://localhost:4000/api/gardens")
    .then(res => res.json())
    .then(gardens => dispatch({ type: "FETCH_GARDENS_DONE", gardens }))
}

// export const createGarden = garden => {

//   return dispatch => {

//     return fetch("http://localhost:4000/api/gardens", {
//       method: "POST",
//       headers: {
//         'Content-type': 'application/json'
//       },
//       body: JSON.stringify({
//         name: garden.name,
//         id: 1
//       }),
//     })
//       .then(res => res.json())
//       .then(feedback => {
//         dispatch(addFeedback(feedback))
//         dispatch(resetFeedbackForm())
//       })
//       .catch(error => console.log(error))
//   }
// }