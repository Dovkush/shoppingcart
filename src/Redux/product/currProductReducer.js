let initialState={
    currProduct:"",
}
function currProductReducer(state=initialState,action){
  switch(action.type){
      case "select_Product": return {
          currProduct:action.payload
      }
      default: return state
  }
}
export default currProductReducer