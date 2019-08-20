const initialState = {
  loading: false,
  name: "",
  strains: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_STRAINS_SUCCESS":
      return { ...state, strains: action.strains }
    case "ADD_STRAIN_SUCCESS":
      return { ...state, strains: [action.strain, ...state.strains] }
    case "SET_NAME_SUCCESS":
      return { ...state, name: action.name }
    case "RESET_STRAIN_FORM":
      return { ...state, name: "" }
    default:
      return state
  }
}