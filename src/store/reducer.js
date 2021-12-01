const initialState={
    data:[],
    success:false
}

const reducer = (state=initialState, action)=>{
    switch(action.type){
        case "GET_SHTRAF":
            return{...state, data:action.data, success:true}
    }
}
export default reducer