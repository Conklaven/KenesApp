export const handleArray = (data) => {
    return {
      type: 'ARRAY',
      payload: data
    }
  }

  export const handleText = (data) =>{
    return{
      type:'TEXT',
      payload: data
    }
  }

  export const handleChecked = (data) =>{
    console.log(data)
    return{
      type:'CHECKED',
      payload: data
    }
  }

  export const handleSelected = (name) =>{
    console.log(name)
    return{
      type:'SELECTED',
      payload: name
    }
  }