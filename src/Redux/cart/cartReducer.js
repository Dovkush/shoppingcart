let initialState={
    cartNo:0
}
function cartReducer(state=initialState,action){
  switch(action.type){
      case "update_cartNo":return {
          cartNo:state.cartNo+1
      }
      default: return state;
  }
}

export default cartReducer