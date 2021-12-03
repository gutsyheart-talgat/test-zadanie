import { combineReducers } from "redux"; 
import {shtrafReducer} from './shtrafReducer'
export default combineReducers({
    shtraf: shtrafReducer
})