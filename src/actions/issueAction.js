export function fetchIssueSuccess(response){
    return {
        type:"ISSUE_SUCCES",
        payload: response
    }
 }
 
 export function fetchIssue(url){
     return (dispatch) => {
         fetch(url).then(response =>{
             if(!response.ok){
                throw new Error(response.statusText);
             }
             return response;
         }).then(response => response.json())
         .then(response => dispatch(fetchIssueSuccess(response)))
     }
 }