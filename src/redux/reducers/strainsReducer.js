const initialState = {
  loading: false,
  strains: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_STRAINS_DONE":
      return { ...state, strains: action.strains }
    default:
      return state
  }
}