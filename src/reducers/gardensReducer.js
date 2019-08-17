const initialState = []

export default function gardensReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_GARDEN':
      console.log('adding garden')
      return state
    default:
      return state
  }
}