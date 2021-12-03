const initialState={
    data:[],
    success:false,
    failed:false,
    load:false
}

export  const shtrafReducer = (state=initialState, action)=>{
    switch(action.type){
        case "GET_SHTRAF":
            return{...state, data:action.data, success:true, failed:false, load:false}
        case 'GET_SHTRAF_FAILED': 
            return { 
              ...state, failed:true,success:false,error: action.error,load:false } 
        case 'SHOW_LOADER': 
            return { 
              ...state, failed:false,success:false,load:true } 
        
         default: 
            return state 
    }
    
    
}
