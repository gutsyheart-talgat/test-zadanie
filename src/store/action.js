const endpoint = 'https://test-task.shtrafovnet.com/fines/' 
const checkResponse = (response, errText) => { 
    if (!response.ok) throw new Error(errText) 
    return response.json() 
  } 

export const getShtraf = (shtraf) =>(dispatch)=>{
    fetch(`${endpoint}${shtraf.title}`) 
    .then((response) => checkResponse(response, 'Ошибка загрузки')) 
    .then((data) => { 
      dispatch({type: 'GET_SHTRAF', data:data }) 
      console.log(data)
    }) 
    
}