const initialState = {
  loading: false,
  gardens: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_GARDEN':
      console.log('adding garden')
      return { ...state, loading: true }
    case "LOADING_GARDENS":
      return { ...state, loading: true }
    case "FETCH_GARDENS_DONE":
      return { ...state, loading: false, gardens: action.gardens }
    default:
      return state
  }
}