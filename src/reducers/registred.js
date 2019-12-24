const initialState = {

}

export function registredReducer(state = initialState, action){
   switch(action.type){
       case "REGISTRED_SUCCES" :
           return { ...state, array:action.payload}
       default:
           return state;
   }
}
