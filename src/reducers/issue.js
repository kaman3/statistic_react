export function issue(state = [], action){
    switch(action.type){
        case "ISSUE_SUCCES" :
            return { ...state, issue:action.payload}
        default:
            return state;
    }
}