export const fetchStrains = () => dispatch => {
  return fetch("http://localhost:4001/strains")
    .then(res => res.json())
    .then(strains => dispatch({
      type: "FETCH_STRAINS_SUCCESS",
      strains: strains.reverse()
    }))
}

export const setName = name => {
  return {
    type: "SET_NAME_SUCCESS",
    name
  }
}

const addStrain = strain => {
  return {
    type: "ADD_STRAIN_SUCCESS",
    strain
  }
}

const resetStrainForm = () => {
  return {
    type: "RESET_STRAIN_FORM"
  }
}

export const createStrain = strain => {
  return dispatch => {
    fetch("http://localhost:4001/strains", {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        strain: {
          name: strain
        }
      })
    }).then(res => res.json())
      .then(strain => {
        dispatch(addStrain(strain))
        dispatch(resetStrainForm())
      })
      .catch(error => console.log(error))
  }
}