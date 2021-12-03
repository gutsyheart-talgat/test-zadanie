const endpoint = 'https://test-task.shtrafovnet.com/fines/' 

export function showLoader(){
  return{
      type: "SHOW_LOADER"
  }
}
export function hideLoader(){
  return{
      type: "HIDE_LOADER"
  }
}
const checkResponse = (response, errText) => { 
    if (!response.ok) throw new Error(errText) 
    return response.json() 
  } 
  const errorHandler = (error) => (error.response ? error.response.data : error.message) 

export const getShtraf = (shtraf) =>(dispatch)=>{
  dispatch(showLoader())
    fetch(`${endpoint}${shtraf.title}`) 
    .then((response) => checkResponse(response, 'Ошибка загрузки')) 
    .then((data) => { 
      dispatch({type: 'GET_SHTRAF', data:data }) 
      dispatch(hideLoader())
      
    })
    .catch((error) => { 
      dispatch({ type: 'GET_SHTRAF_FAILED',error: errorHandler(error) }) 
      dispatch(hideLoader())
    })
}