let initState = {
    array: [],
    guidearray: [],
    txt: '',
    guidetxt: '',
    kosher: '',
    selectedname: [],
    }

export const reducer = (state=initState, action) => {
    switch(action.type){
        case 'ARRAY' : 
      return{...state, array: action.payload}
      case 'GUIDEARRAY' : 
      return{...state, guidearray: action.payload}
      case 'TEXT' : 
      return{...state, txt: action.payload}
      case 'GUIDETEXT' : 
      return{...state, guidetxt: action.payload}
      case 'CHECKED' : 
      return{...state, kosher: action.payload}
      case 'SELECTED' : 
      return{...state, selectedname: action.payload}
      

 default:   
return{...state}
    }
}