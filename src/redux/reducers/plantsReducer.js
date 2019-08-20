const initialState = {
  loading: false,
  plants: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    // case 'ADD_PLANT':
    //   console.log('adding plant')
    //   return { ...state, loading: true }
    // case "LOADING_PLANTS":
    //   return { ...state, loading: true }
    case "FETCH_PLANTS_DONE":
      return { ...state, loading: false, plants: action.plants }
    default:
      return state
  }
}