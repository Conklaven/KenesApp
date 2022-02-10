let initState = {
    array: [],
    txt: '',
    kosher: '',
    selectedname: [],
    }

export const reducer = (state=initState, action) => {
    switch(action.type){
        case 'ARRAY' : 
      return{...state, array: action.payload}
      case 'TEXT' : 
      return{...state, txt: action.payload}
      case 'CHECKED' : 
      return{...state, kosher: action.payload}
      case 'SELECTED' : 
      return{...state, selectedname: action.payload}
      

 default:   
return{...state}
    }
}