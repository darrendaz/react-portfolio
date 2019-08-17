const initialState = {
  loading: false,
  gardens: []
}

export default function gardensReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_GARDEN':
      console.log('adding garden')
      return state
    case "LOADING_GARDENS":
      return { ...state, loading: true }
    case "FETCH_GARDENS":
      return { ...state, loading: false, gardens: action.gardens }
    default:
      return state
  }
}