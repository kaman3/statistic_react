const initialState = {
    searchQuery: '',
  }

export function filter(state = initialState, action){
    switch(action.type){
        case "SET_SEARCHQUERY":
            return { ...state, searchQuery:action.payload}
        default :
            return state;
    }
}