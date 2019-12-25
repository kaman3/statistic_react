export function filterAction(search){
  return{
      type: "SET_SEARCHQUERY",
      payload:search
  }
}