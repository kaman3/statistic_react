export function fetchDataSuccess(response){
   return {
       type:"REGISTRED_SUCCES",
       payload: response
   }
}

export function fetchData(url){
    return (dispatch) => {
        fetch(url).then(response =>{
            if(!response.ok){
               throw new Error(response.statusText);
            }
            return response;
        }).then(response => response.json())
        .then(response => dispatch(fetchDataSuccess(response)))
    }
}