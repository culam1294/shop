export const selectMenu =()=>{
  return {
      type: 'SELECT_MENU_0'
  }
}
export const selectMenu1 =()=>{
  return {
      type: 'SELECT_MENU_1'
  }
}
export const selectMenu2 =()=>{
  return {
      type: 'SELECT_MENU_2'
  }
}
export const selectMenuX =(X)=>{
  return {
      type: 'SELECT_MENU_X',
      payload: X,
  }
}